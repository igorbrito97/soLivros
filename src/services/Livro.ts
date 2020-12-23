/* eslint-disable prettier/prettier */
export const buscaLivros = async () => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/Livro/ListarLivros');
    return response;
};

export const buscaDetalheLivro = async (livroId: number) => {
    const response = await fetch('https://scot13.tst.marttech.com.br/api/Livros/' + livroId);
    return response;
};
