/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const ContainerLivro = styled.View`
    background-color: #E7F5F8;
`;

export const Imagem = styled.Image`
    height: 256px;
    width: 100%;
    margin-top: 24px;
`;

export const BotaoVoltar = styled.TouchableOpacity`
padding: 16px;
`;

export const NomeLivro = styled.Text`
    font-weight: bold;
    font-size: 24;
    text-align: center;
    margin-top: 16;
`;

export const AutorLivro = styled.Text`
    color: #aaa;
    font-size: 16;
    text-align: center;
    margin-bottom: 10;
`;

export const ContainerDescricao = styled.View`
    padding: 16px;
    margin-top: 8px;
`;

export const TextoDescricao = styled.Text`
font-size: 18px;
    font-weight: bold;
`;

export const TextoDescricaoDetalhes = styled.Text`
font-size: 18px;
    color: #aaa;
`;

export const BotaoFavorito = styled.TouchableOpacity`
    background-color: #023E8A;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin: 16px;
    border-radius: 8px;
`;

export const TextoBotao = styled.Text`
    font-size: 16px;
    color: #fff; 
    font-weight: bold; 
`;
