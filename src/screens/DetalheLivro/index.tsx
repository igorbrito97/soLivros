/* eslint-disable prettier/prettier */
/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../../context/auth';
import { DesfavoritarLivro, FavoritarLivro } from '../../services/Favorito';
import { buscaDetalheLivro } from '../../services/Livro';
import {
    AutorLivro,
    Container,
    ContainerLivro,
    Imagem,
    NomeLivro,
    ContainerDescricao,
    TextoDescricao,
    TextoDescricaoDetalhes,
    BotaoFavoritar,
    TextoBotaoFavoritar,
    BotaoDesfavoritar,
    TextoBotaoDesfavoritar,
    BotaoVoltar,
} from './styles';

interface DetalheLivroDTO {
    id: number;
    nome: string;
    autor: string;
    descricao: string;
    imagem: string;
}

const DetalheLivro = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { token } = useAuth();

    const [livro, setLIvro] = useState<DetalheLivroDTO | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const livroId = route.params.livroId;
    const paramsIsFavorite = route.params.isFavorite;

    useEffect(() => {
        const carregaDetalheLivro = async () => {
            const response = await buscaDetalheLivro(livroId, token);
            const json = await response.json();
            if (json.success) {
                setLIvro(json.data);
            }
            else
                ToastAndroid.show('Erro ao recuperar detalhes do livro!', ToastAndroid.LONG);
        };
        carregaDetalheLivro();
    }, [livroId]);

    useEffect(() => {
        setIsFavorite(paramsIsFavorite);
    }, [paramsIsFavorite]);

    const handleFavoriteClick = async () => {
        console.log('handlinggggggggggggggg', isFavorite);
        if (isFavorite) {
            const response = await DesfavoritarLivro(livroId, token);
            console.log('RESONSE', response);
            if (response.success) {
                setIsFavorite(!isFavorite);
                ToastAndroid.show('Livro desfavoritado com sucesso!', ToastAndroid.SHORT);
            }
        }
        else {
            const response = await FavoritarLivro(livroId, token);
            console.log('RESONSE', response);
            if (response.success) {
                setIsFavorite(!isFavorite);
                ToastAndroid.show('Livro favoritado com sucesso!', ToastAndroid.SHORT);
            }
        }

    };

    //console.log('livro', livro);
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#E7F5F8" />
            <Container>
                {!!livro ? (
                    <>
                        <ScrollView style={{ flex: 1 }}>
                            <ContainerLivro>
                                <BotaoVoltar onPress={() => navigation.goBack()}>
                                    <Icon name="arrow-left" size={24} color="#000" />
                                </BotaoVoltar>
                                <Imagem
                                    resizeMode="contain"
                                    source={{ uri: livro.imagem }}
                                />
                                <NomeLivro>{livro.nome}</NomeLivro>
                                <AutorLivro>{livro.autor}</AutorLivro>
                            </ContainerLivro>
                            <ContainerDescricao>
                                <TextoDescricao>Descrição</TextoDescricao>
                                <TextoDescricaoDetalhes>{livro.descricao}</TextoDescricaoDetalhes>
                            </ContainerDescricao>
                        </ScrollView>
                        {
                            isFavorite ?
                                <BotaoDesfavoritar onPress={handleFavoriteClick}>
                                    <TextoBotaoDesfavoritar>Remover dos favoritos</TextoBotaoDesfavoritar>
                                </BotaoDesfavoritar>
                                :
                                <BotaoFavoritar onPress={handleFavoriteClick}>
                                    <TextoBotaoFavoritar>Adicionar aos favoritos</TextoBotaoFavoritar>
                                </BotaoFavoritar>
                        }
                    </>
                ) : <ActivityIndicator size={42} color="#023E8A" />
                }
            </Container>
        </>
    );
};

export default DetalheLivro;
