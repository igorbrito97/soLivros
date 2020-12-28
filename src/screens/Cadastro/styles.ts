/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 16px;
`;
export const ImageContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    margin-top: 40px;
`;

export const InputContainer = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
`;

export const TitleText = styled.Text`
    font-size: 45px;
    color: #023E8A;
    font-weight: bold
`;

export const Input = styled.TextInput`    
    border-bottom-color: #023E8A;
    border-bottom-width: 3px;
    width: 90%;
    height: 46px;
    margin-top: 12px;
`;

export const RegisterButton = styled.TouchableOpacity`
    width: 90%;
    height: 56px;
    background-color: #023E8A;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;
