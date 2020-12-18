/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaLivros from './screens/ListaLivros';
import DetalheLivro from './screens/DetalheLivro';

const Stack = createStackNavigator();

const App = () => { // moackup https://xd.adobe.com/view/2944d3cf-2791-4ef0-b58c-ba1951c3bec6-7c17/
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="ListaLivros" component={ListaLivros} />
        <Stack.Screen name="DetalheLivro" component={DetalheLivro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
