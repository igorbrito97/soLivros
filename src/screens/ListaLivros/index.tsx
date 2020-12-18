/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import Livro from '../../components/Livro';
import { FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BotaoIcone, Container, ContainerRow, NomeUsuario } from './styles';

const ListaLivros = () => {
    const [bookList, setBookList] = useState([1, 2, 3, 4]);
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
                    renderItem={({ item }) => <Livro />}
                    keyExtractor={item => 'item' + item}
                />
            </Container>
        </>
    );
};

export default ListaLivros;
