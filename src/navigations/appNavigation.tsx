/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListaLivros from '../screens/ListaLivros';
import DetalheLivro from '../screens/DetalheLivro';

const Stack = createStackNavigator();
// mockup https://xd.adobe.com/view/2944d3cf-2791-4ef0-b58c-ba1951c3bec6-7c17/
// api https://scot13.tst.marttech.com.br/swagger/index.html
const AppNavigation = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="ListaLivros" component={ListaLivros} />
            <Stack.Screen name="DetalheLivro" component={DetalheLivro} />
        </Stack.Navigator>
    );
};
export default AppNavigation;
