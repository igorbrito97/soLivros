/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/auth';
import { Navigations } from './navigations';
// mockup https://xd.adobe.com/view/2944d3cf-2791-4ef0-b58c-ba1951c3bec6-7c17/
// api https://scot13.tst.marttech.com.br/swagger/index.html
const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigations />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default App;
