/* eslint-disable prettier/prettier */

export const BuscarFavoritos = async (token: string) => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/Favorito/ListarLivrosFavoritados', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
};

export const FavoritarLivro = async (livroId: number, token: string) => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/Favorito/FavoritarLivro/' + livroId, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
};

export const DesfavoritarLivro = async (livroId: number, token: string) => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/Favorito/DesfavoritarLivro/' + livroId, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
};
