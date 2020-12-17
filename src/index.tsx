/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaLivros from './screens/ListaLivros';
import DetalheLivro from './screens/DetalheLivro';

const Stack = createStackNavigator();

const App = () => {
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
