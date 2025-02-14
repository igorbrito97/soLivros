/* eslint-disable prettier/prettier */
/* eslint-disable curly */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import { useAuth } from '../../context/auth';
import {
    Container,
    LoginButton,
    SignUpButton,
    SingUpTextButton,
    LoginTextButton,
    Input,
    TitleText,
    ItensContainer,
    ImageContainer,
    ContainerPassword,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

//igor@igor.com.br -> senha0101
const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visiblePassword, setVisiblePassword] = useState(false);
    const navigation = useNavigation();
    const { signIn } = useAuth();

    const handleLoginClick = () => {
        if (email.trim() === '')
            Alert.alert('Erro!!', 'Você deve digitar seu nome!');
        else if (password.trim() === '')
            Alert.alert('Erro!!', 'Você deve digitar seu email!');
        else {
            signIn(email, password);
        }
    };

    const handleSignUpClick = () => {
        navigation.navigate('Cadastro');
    };

    return (
        <Container>
            <ImageContainer>
                <Image source={require('C:/Users/igor.brito/Documents/soLivros/src/assets/icon2.png')} />
                <TitleText>SÓ LIVROS</TitleText>
            </ImageContainer>
            <ItensContainer>
                <Input
                    placeholder="Email...."
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
                <ContainerPassword>
                    <Input
                        placeholder="Senha..."
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={!visiblePassword}
                    />
                    <Icon
                        name={visiblePassword ? 'eye-slash' : 'eye'}
                        size={24}
                        onPress={() => setVisiblePassword(!visiblePassword)}
                    />
                </ContainerPassword>
                <LoginButton onPress={handleLoginClick}>
                    <LoginTextButton>Login</LoginTextButton>
                </LoginButton>
                <SignUpButton onPress={handleSignUpClick}>
                    <SingUpTextButton>Cadastre-se</SingUpTextButton>
                </SignUpButton>
            </ItensContainer>
        </Container>
    );
};

export default Login;
