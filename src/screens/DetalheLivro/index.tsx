/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../../context/auth';
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
    BotaoFavorito,
    TextoBotao,
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
    const livroId = route.params.livroId;
    const [livro, setLIvro] = useState<DetalheLivroDTO | null>(null);
    const { token } = useAuth();

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

    console.log('livro', livro);
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
                        <BotaoFavorito>
                            <TextoBotao>Adicionar aos favoritos</TextoBotao>
                        </BotaoFavorito>
                    </>
                ) : <ActivityIndicator size={42} color="#023E8A" />
                }
            </Container>
        </>
    );
};

export default DetalheLivro;
