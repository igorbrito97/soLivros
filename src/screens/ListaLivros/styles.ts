/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    flex: 1;
    padding: 16px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
`;

export const NomeUsuario = styled.Text`
    flex: 1;
    font-size: 24px;
`;

export const BotaoIcone = styled.TouchableOpacity`
    height: 42px;
    width: 42px;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
`;

export const ContainerRowPesquisa = styled.View`
    flex-direction: row;
    height: 45px;
`;

export const InputPesquisar = styled.TextInput`
    border-bottom-width: 3px;
    border-bottom-color: #023E8A;
    margin-right: 10px;
    margin-left: 10px;
    flex: 1;
`;
