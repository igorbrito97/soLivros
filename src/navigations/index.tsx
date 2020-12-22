/* eslint-disable prettier/prettier */
import React from 'react';
import AppNavigation from './appNavigation';
import AuthNavigation from './authNavigation';

export const Navigations: React.FC = () => {
    //const { signed, loadingScreen, synchronizing } = useAuth();
    const signedIn = false;

    return signedIn ? <AppNavigation /> : <AuthNavigation />;
};
