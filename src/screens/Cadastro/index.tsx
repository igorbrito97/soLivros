/* eslint-disable prettier/prettier */
/* eslint-disable curly */
import React, { useState } from 'react';
import { Image, Alert } from 'react-native';
import { useAuth } from '../../context/auth';
import { Container, Input, TextButton, RegisterButton, InputContainer, ImageContainer, TitleText } from './styles';


const Cadastro: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register } = useAuth();

    const handleRegister = () => {
        if (name.trim() === '')
            Alert.alert('Erro!!', 'Você deve digitar seu nome!');
        else if (email.trim() === '')
            Alert.alert('Erro!!', 'Você deve digitar seu email!');
        else if (!email.includes('@'))
            Alert.alert('Erro!!', 'Você deve digitar um email válido!');
        else if (password.trim() === '')
            Alert.alert('Erro!!', 'Você deve digitar uma senha!');
        else if (confirmPassword.trim() === '')
            Alert.alert('Erro!!', 'Você deve confirmar sua senha!');
        else if (password !== confirmPassword)
            Alert.alert('Erro!!', 'As duas senhas devem ser iguais!');
        else {
            console.log('registrando');
            register(name, email, password);
        }
    };

    return (
        <Container>
            <ImageContainer>
                <Image source={require('C:/Users/igor.brito/Documents/soLivros/src/assets/icon2.png')} />
                <TitleText>SÓ LIVROS</TitleText>
            </ImageContainer>
            <InputContainer>
                <Input
                    value={name}
                    onChangeText={(value) => setName(value)}
                    placeholder="Digite seu nome"
                />
                <Input
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    placeholder="Digite seu e-mail"
                />
                <Input
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                />
                <Input
                    value={confirmPassword}
                    onChangeText={(value) => setConfirmPassword(value)}
                    placeholder="Confirme sua senha"
                    secureTextEntry={true}
                />
                <RegisterButton onPress={handleRegister}>
                    <TextButton>Registrar</TextButton>
                </RegisterButton>
            </InputContainer>

        </Container>
    );
};

export default Cadastro;
