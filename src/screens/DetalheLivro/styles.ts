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
    font-size: 24px;
    text-align: center;
    margin-top: 16px;
`;

export const AutorLivro = styled.Text`
    color: #aaa;
    font-size: 16px;
    text-align: center;
    margin-bottom: 10px;
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

const BotaoFavorito = styled.TouchableOpacity`
    height: 56px;
    justify-content: center;
    align-items: center;
    margin: 16px;
    border-radius: 8px;
`;

const TextoBotao = styled.Text`
    font-size: 16px;
    font-weight: bold; 
`;

export const BotaoFavoritar = styled(BotaoFavorito)`
    background-color: #023E8A;
`;

export const BotaoDesfavoritar = styled(BotaoFavorito)`
    background-color: #E6E6E6;
`;

export const TextoBotaoFavoritar = styled(TextoBotao)`
    color: #fff;
`;

export const TextoBotaoDesfavoritar = styled(TextoBotao)`
    color: #000;
`;
