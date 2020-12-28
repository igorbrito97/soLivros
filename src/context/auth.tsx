/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from 'react';
import { loginAction, registerAction } from '../services/User';
import { AuthContextDTO, RegisterUserDTO, UserInfoDTO, LoginDTO } from './types';

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC = ({ children }) => {
    const [signedIn, setSignedIn] = useState(false);
    const [token, setToken] = useState('');
    const [user, setUser] = useState<UserInfoDTO | null>(null);
    const [loading, setLoading] = useState(false);

    const signIn = async (email: string, password: string) => {
        setLoading(true);
        const data: LoginDTO = {
            email: email,
            senha: password,
        };
        const resp = await loginAction(data);
        console.log('RESPLOGIN', resp);
        if (resp.success) {
            setSignedIn(true);
            setToken(resp.data.token);
        }
        else {
            console.log('Deu ruim!!!!');
        }

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
        console.log('resp', resp);
        if (resp.data.success) {
            console.log('Deu certo!');
            setSignedIn(true);
            setToken(resp.data.token);
        }
        else {
            console.log('Deu ruim!');
        }
        setLoading(false);
    };


    return (
        <AuthContext.Provider
            value={{
                signedIn: signedIn,
                user: user,
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
