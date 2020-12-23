/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container, Input, TextButton, RegisterButton } from './styles';

const Cadastro: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Container>
            <Text style={{ fontSize: 40 }}>SÓ LIVROS</Text>
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
            <RegisterButton>
                <TextButton>Registrar</TextButton>
            </RegisterButton>

        </Container>
    );
};

export default Cadastro;
