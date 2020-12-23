/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.TextInput`    
    border-bottom-color: #023E8A;
    border-bottom-width: 3px;
    width: 85%;
    height: 46px;
    margin-top: 12px;
`;

export const RegisterButton = styled.TouchableOpacity`
    width: 85%;
    height: 56px;
    background-color: #023E8A;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 15px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;