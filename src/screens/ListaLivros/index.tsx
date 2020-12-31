/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect } from 'react';
import Livro from '../../components/Livro';
import { Alert, FlatList, StatusBar, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BotaoIcone, Container, ContainerRow, ContainerRowPesquisa, InputPesquisar, NomeUsuario } from './styles';
import { buscaLivros } from '../../services/Livro';
import { useAuth } from '../../context/auth';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BuscarFavoritos } from '../../services/Favorito';

export interface ListaLivrosDTO {
    id: number;
    nome: string;
    autor: string;
    imagem: string;
}

const ListaLivros = () => {
    const { token, signOut } = useAuth();
    const navigation = useNavigation();
    const [bookList, setBookList] = useState<Array<ListaLivrosDTO>>([]);
    const [fetchedBookList, setFetchedBookList] = useState<Array<ListaLivrosDTO>>([]);
    const [favoriteList, setFavoriteList] = useState<Array<ListaLivrosDTO>>([]);
    const [isSearching, setSearching] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const carregaLivros = async () => {
            const response = await buscaLivros(token);
            const json = await response.json();
            if (json.success) {
                setFetchedBookList(json.data);
                setBookList(json.data);
            }
            else
                ToastAndroid.show('Erro ao recuperar os livros!!', ToastAndroid.LONG);
        };
        carregaLivros();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            let isActive = true;

            const fetchFavorites = async () => {
                const response = await BuscarFavoritos(token);
                if (response.success) {
                    setFavoriteList(response.data);
                }
                else ToastAndroid.show('Erro ao buscar favoritos!', ToastAndroid.SHORT);
            };
            fetchFavorites();
            return () => { isActive = false; };
        }, [])
    );

    const signOutAlert = () => {
        Alert.alert(
            'Atençao!!',
            'Deseje realmente sair??',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel',
                },
                {
                    text: 'Sair',
                    onPress: () => signOut(),
                },
            ],
        );
    };

    const isBookInFavorites = (id: number) => {
        const book = favoriteList.find(item => item.id === id);
        return !!book && book.id > 0 ? true : false;
    };

    useEffect(() => {
        isSearching ? setBookList([]) : setBookList(fetchedBookList);
        setSearchInput('');
    }, [isSearching]);

    const buscarNaLista = (searchText: string) => {
        if (searchText.trim() === '') {
            setBookList([]);
            return;
        }
        const array = fetchedBookList.filter(item => item.nome.includes(searchText));
        setBookList(array);
    };

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Container>
                {
                    isSearching ?
                        <ContainerRowPesquisa>
                            <BotaoIcone onPress={() => setSearching(false)}>
                                <Icon name="arrow-left" size={24} color="#000" />
                            </BotaoIcone>
                            <InputPesquisar
                                value={searchInput}
                                onChangeText={(value) => {
                                    setSearchInput(value);
                                    buscarNaLista(value);
                                }}
                            />
                            <BotaoIcone onPress={() => { }}>
                                <Icon name="search" size={30} color="#000" />
                            </BotaoIcone>
                        </ContainerRowPesquisa>
                        :
                        <ContainerRow>
                            <NomeUsuario>Olá, Renato</NomeUsuario>
                            <ContainerRow>
                                <BotaoIcone onPress={() => navigation.navigate('ListaFavoritos')}>
                                    <Icon name="heart" size={30} color="#000" />
                                </BotaoIcone>
                                <BotaoIcone onPress={() => setSearching(true)}>
                                    <Icon name="search" size={30} color="#000" />
                                </BotaoIcone>
                                <BotaoIcone onPress={() => signOutAlert()}>
                                    <Icon name="sign-out" size={35} color="#000" />
                                </BotaoIcone>
                            </ContainerRow>
                        </ContainerRow>
                }

                <FlatList
                    style={{ flex: 1 }}
                    data={bookList}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return <Livro data={item} isFavorite={isBookInFavorites(item.id)} />;
                    }}
                    keyExtractor={(_, index) => 'item' + index}
                />
            </Container>
        </>
    );
};

export default ListaLivros;
