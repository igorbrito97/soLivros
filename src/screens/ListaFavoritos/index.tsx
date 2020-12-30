/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Livro from '../../components/Livro';
import { Container, ContainerRow, FavoritoText, UsuarioText } from './styles';
import { useNavigation } from '@react-navigation/native';

const ListaFavoritos: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Container>
                <ContainerRow>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={24} color="#000" />
                    </TouchableOpacity>
                    <UsuarioText>Olá, Renato</UsuarioText>
                </ContainerRow>
                <FavoritoText>Seus favoritos</FavoritoText>
                <FlatList
                    data={[]}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return <Livro data={item} />;
                    }}
                    keyExtractor={(_, index) => 'item' + index}
                />
            </Container>
        </>
    );
};

export default ListaFavoritos;
