/* eslint-disable prettier/prettier */
export interface AuthContextDTO {
    signed: boolean;
    user: string; //User
    signIn: (email: string, password: string) => void;
    signOut: () => void;
}
