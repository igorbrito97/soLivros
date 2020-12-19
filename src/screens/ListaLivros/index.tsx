/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect } from 'react';
import Livro from '../../components/Livro';
import { FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BotaoIcone, Container, ContainerRow, NomeUsuario } from './styles';
import { buscaLivros } from '../../services/Livro';

export interface ListaLivrosDTO {
    id: number;
    nome: string;
    autor: string;
    imagem: string;
}

const ListaLivros = () => {
    const [bookList, setBookList] = useState<Array<ListaLivrosDTO>>([]);

    useEffect(() => {
        const carregaLivros = async () => {
            const response = await buscaLivros();
            const json = await response.json();
            setBookList(json);
        };
        carregaLivros();
    }, []);

    console.log(bookList);
    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Container>
                <ContainerRow>
                    <NomeUsuario>Olá, Renato</NomeUsuario>
                    <ContainerRow>
                        <BotaoIcone>
                            <Icon name="heart" size={30} color="#000" />
                        </BotaoIcone>
                        <BotaoIcone>
                            <Icon name="search" size={30} color="#000" />
                        </BotaoIcone>
                    </ContainerRow>
                </ContainerRow>
                <FlatList
                    style={{ flex: 1 }}
                    data={bookList}
                    numColumns={2}
                    renderItem={({ item }) => {
                        console.log(item);
                        return <Livro data={item} />;
                    }}
                    keyExtractor={(_, index) => 'item' + index}
                />
            </Container>
        </>
    );
};

export default ListaLivros;
