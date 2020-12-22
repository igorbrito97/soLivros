/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from 'react';
import { AuthContextDTO } from './types';

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState('');

    const signIn = async (email: string, password: string) => {

    };

    const signOut = async () => {

    };


    return (
        <AuthContext.Provider
            value={{ signed: false, user: user, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};
