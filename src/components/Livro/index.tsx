/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BotaoLivro, Imagem, LivroAutor, LivroNome } from './styles';

const Livro = () => {
    const navigation = useNavigation();
    return (
        <BotaoLivro
            onPress={() => { navigation.navigate('DetalheLivro'); }}
        >
            <Imagem
                resizeMode="cover"
                source={require('../../assets/202852714dec217e579db202a977be70.jpg')}
            />
            <LivroNome>Livro</LivroNome>
            <LivroAutor>Autor</LivroAutor>
        </BotaoLivro>
    );
};

export default Livro;
