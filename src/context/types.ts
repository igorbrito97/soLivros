/* eslint-disable prettier/prettier */
export interface AuthContextDTO {
    signedIn: boolean;
    token: string;
    loading: boolean;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
    register: (name: string, email: string, password: string) => void;

    setLoading: (isLoading: boolean) => void;
}

export interface RegisterUserDTO {
    nome: string;
    email: string;
    senha: string;
}

export interface LoginDTO {
    email: string;
    senha: string;
}

export interface UserInfoDTO {
    id: string;
    nome: string;
    email: string;
    senha: string;
}
