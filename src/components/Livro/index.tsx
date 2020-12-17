/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image, Text } from 'react-native';

const Livro = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{ flex: 1, margin: 8, backgroundColor: '#fff' }}
            onPress={() => { navigation.navigate('DetalheLivro'); }}
        >
            <Image
                style={{ height: 256, width: '100%' }}
                resizeMode="cover"
                source={require('../../assets/202852714dec217e579db202a977be70.jpg')}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Livro</Text>
            <Text style={{ color: '#aaa', fontSize: 14 }}>Autor</Text>
        </TouchableOpacity>
    );
};

export default Livro;
