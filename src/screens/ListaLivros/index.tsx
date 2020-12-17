/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import Livro from '../../components/Livro';
import { View, Text, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListaLivros = () => {
    const [bookList, setBookList] = useState([1, 2, 3, 4]);
    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={{ backgroundColor: '#fff', flex: 1, padding: 16 }}>
                <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
                    <Text style={{ flex: 1, fontSize: 24 }}>Olá, Renato</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{
                                height: 42,
                                width: 42,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Icon name="heart" size={30} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 42,
                                width: 42,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Icon name="search" size={30} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    style={{ flex: 1 }}
                    data={bookList}
                    numColumns={2}
                    renderItem={({ item }) => <Livro />}
                    keyExtractor={item => 'item' + item}
                />
            </View>
        </>
    );
};

export default ListaLivros;
