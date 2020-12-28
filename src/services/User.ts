/* eslint-disable prettier/prettier */
import { LoginDTO, RegisterUserDTO } from '../context/types';

export const loginAction = async (user: LoginDTO) => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/User/FazerLogin', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};

export const registerAction = async (info: RegisterUserDTO) => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/User/CriarConta', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(info),
    });
    return response.json();
};
