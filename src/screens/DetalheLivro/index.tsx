/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    AutorLivro,
    Container,
    ContainerLivro,
    Imagem,
    NomeLivro,
    ContainerDescricao,
    TextoDescricao,
    TextoDescricaoDetalhes,
    BotaoFavorito,
    TextoBotao,
    BotaoVoltar,
} from './styles';

const DetalheLivro = () => {
    const navigation = useNavigation();
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor='#E7F5F8' />
            <Container>
                <ScrollView style={{ flex: 1 }}>
                    <ContainerLivro>
                        <BotaoVoltar onPress={() => navigation.goBack()}>
                            <Icon name="arrow-left" size={24} color="#000" />
                        </BotaoVoltar>
                        <Imagem
                            resizeMode="contain"
                            source={require('../../assets/202852714dec217e579db202a977be70.jpg')}
                        />
                        <NomeLivro>Livro</NomeLivro>
                        <AutorLivro>Autor</AutorLivro>
                    </ContainerLivro>
                    <ContainerDescricao>
                        <TextoDescricao>Descrição</TextoDescricao>
                        <TextoDescricaoDetalhes>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus tincidunt eros, dignissim laoreet neque mattis non. Nullam cursus sed nulla in cursus. Maecenas vitae dapibus tortor.</TextoDescricaoDetalhes>
                    </ContainerDescricao>
                </ScrollView>
                <BotaoFavorito>
                    <TextoBotao >Adicionar aos favoritos</TextoBotao>
                </BotaoFavorito>
            </Container>
        </>
    );
};

export default DetalheLivro;
