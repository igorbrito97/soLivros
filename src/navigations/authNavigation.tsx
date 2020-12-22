/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';

const AuthStack = createStackNavigator();
// mockup https://xd.adobe.com/view/2944d3cf-2791-4ef0-b58c-ba1951c3bec6-7c17/
// api https://scot13.tst.marttech.com.br/swagger/index.html
const AuthNavigation = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Cadastro" component={Cadastro} />
        </AuthStack.Navigator>
    );
};
export default AuthNavigation;
