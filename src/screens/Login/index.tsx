/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image } from 'react-native';
import {
    Container,
    LoginButton,
    SignUpButton,
    SingUpTextButton,
    LoginTextButton,
    Input,
    TitleText,
    InputContainer,
    ImageContainer,
} from './styles';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(false);
    const navigation = useNavigation();

    const handleLoginClick = () => {
    };

    const handleSingUpClick = () => {
        navigation.navigate('Cadastro');
    };


    return (
        <Container>
            <ImageContainer>
                <Image source={require('C:/Users/igor.brito/Documents/soLivros/src/assets/icon2.png')} />
                <TitleText>SÓ LIVROS</TitleText>
            </ImageContainer>
            <InputContainer>
                <Input
                    placeholder="Email...."
                    value={email}
                    onChangeText={(value) => setEmail(value)} />
                <Input
                    placeholder="Senha..."
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry={!visiblePassword} />
                <LoginButton onPress={handleLoginClick}>
                    <LoginTextButton>Login</LoginTextButton>
                </LoginButton>
                <SignUpButton onPress={handleSingUpClick}>
                    <SingUpTextButton>Cadastre-se</SingUpTextButton>
                </SignUpButton>
            </InputContainer>
        </Container>
    );
};

export default Login;
