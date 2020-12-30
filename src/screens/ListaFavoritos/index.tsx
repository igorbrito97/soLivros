/* eslint-disable prettier/prettier */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { StatusBar, ToastAndroid, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';
import { Container, ContainerRow, FavoritoText, UsuarioText } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BuscarFavoritos } from '../../services/Favorito';
import { useAuth } from '../../context/auth';
import { ListaLivrosDTO } from '../ListaLivros';

const ListaFavoritos: React.FC = () => {
    const navigation = useNavigation();
    const { token } = useAuth();
    const [bookList, setBookList] = useState<Array<ListaLivrosDTO>>([]);

    useFocusEffect(
        React.useCallback(() => {
            let isActive = true;

            const fetchFavorites = async () => {
                const response = await BuscarFavoritos(token);
                if (response.success) {
                    setBookList(response.data);
                }
                else ToastAndroid.show('Erro ao buscar favoritos!', ToastAndroid.LONG);
            };
            fetchFavorites();
            return () => { isActive = false; };
        }, [])
    );

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Container>
                <ContainerRow>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={24} color="#000" />
                    </TouchableOpacity>
                    <UsuarioText>Olá, Renato</UsuarioText>
                </ContainerRow>
                <FavoritoText>Seus favoritos</FavoritoText>
                <FlatList
                    data={bookList}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return <Livro data={item} isFavorite={true} />;
                    }}
                    keyExtractor={(_, index) => 'item' + index}
                />
            </Container>
        </>
    );
};

export default ListaFavoritos;
