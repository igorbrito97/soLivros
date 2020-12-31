/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { loginAction, registerAction } from '../services/User';
import { AuthContextDTO, RegisterUserDTO, LoginDTO } from './types';

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC = ({ children }) => {
    const [signedIn, setSignedIn] = useState(false);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = async (email: string, password: string) => {
        setLoading(true);
        const data: LoginDTO = {
            email: email,
            senha: password,
        };
        const resp = await loginAction(data);
        if (resp.success) {
            setSignedIn(true);
            setToken(resp.data.token);
        }
        else {
            ToastAndroid.show('Erro ao fazer login!', ToastAndroid.LONG);
        }
        setLoading(false);
    };

    const signOut = async () => {
        setSignedIn(false);
        setToken('');
    };

    const register = async (name: string, email: string, password: string) => {
        setLoading(true);
        const data: RegisterUserDTO = {
            nome: name,
            email: email,
            senha: password,
        };
        const resp = await registerAction(data);
        if (resp.data.success) {
            setSignedIn(true);
            setToken(resp.data.token);
        }
        else {
            ToastAndroid.show('Erro ao fazer cadastro!', ToastAndroid.LONG);
        }
        setLoading(false);
    };


    return (
        <AuthContext.Provider
            value={{
                signedIn: signedIn,
                token: token,
                loading: loading,
                signIn,
                signOut,
                register,
                setLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};
