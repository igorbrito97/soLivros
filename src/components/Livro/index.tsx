/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BotaoLivro, Imagem, LivroAutor, LivroNome } from './styles';
import { ListaLivrosDTO } from '../../screens/ListaLivros';

export interface LivroProps {
    data: ListaLivrosDTO;
}

const Livro = (props: LivroProps) => {
    const navigation = useNavigation();
    console.log('props', props);
    return (
        <BotaoLivro
            onPress={() => { navigation.navigate('DetalheLivro', { livroId: props.data.id }); }}
        >
            <Imagem
                resizeMode="cover"
                source={{ uri: props.data.imagem }}
            />
            <LivroNome>{props.data.nome}</LivroNome>
            <LivroAutor>{props.data.autor}</LivroAutor>
        </BotaoLivro>
    );
};

export default Livro;
