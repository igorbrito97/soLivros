/* eslint-disable prettier/prettier */
export const buscaLivros = async (token: string) => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/Livro/ListarLivros', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};

export const buscaDetalheLivro = async (livroId: number, token: string) => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/Livro/ListarDetalheLivro/' + livroId, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};
