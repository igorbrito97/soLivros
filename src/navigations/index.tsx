/* eslint-disable prettier/prettier */
/* eslint-disable curly */
import React from 'react';
import { useAuth } from '../context/auth';
import Loading from '../screens/Loading';
import AppNavigation from './appNavigation';
import AuthNavigation from './authNavigation';

export const Navigations: React.FC = () => {
    const { signedIn, loading } = useAuth();

    if (loading)
        return <Loading />;

    return signedIn ? <AppNavigation /> : <AuthNavigation />;
};
