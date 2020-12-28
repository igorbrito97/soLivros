/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

const Loading: React.FC = () => {
    return (
        <Container>
            <ActivityIndicator color="#E7F5F8" size={42} />
        </Container>
    );
};

export default Loading;
