/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    padding: 16px;
`;

export const ImageContainer = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 40px;
`;

export const TitleText = styled.Text`
    font-size: 45px;
    color: #023E8A;
    font-weight: bold;
`;

export const ItensContainer = styled.View`
    flex: 1;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
`;

export const Input = styled.TextInput`
    border-bottom-color: #023E8A;
    border-bottom-width: 3px;
    width: 80%;
    height: 46px;
    margin-top: 12px;
`;

export const ContainerPassword = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LoginButton = styled.TouchableOpacity`
    width: 90%;
    height: 56px;
    background-color: #023E8A;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 15px;
`;

export const SignUpButton = styled.TouchableOpacity`
    width: 90%;
    height: 56px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;

export const LoginTextButton = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`;

export const SingUpTextButton = styled(LoginTextButton)`
    color: #023E8A 
`;
