/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Container, LoginButton, SignUpButton, SingUpTextButton, LoginTextButton, Input } from './styles';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(false);
    const navigation = useNavigation();

    const handleLoginClick = () => {
    }

    const handleSingUpClick = () => {
        navigation.navigate('Cadastro');
    }


    return (
        <Container>
            <Text style={{ fontSize: 40 }}>SÓ LIVROS</Text>
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
        </Container>
    );
};

export default Login;
