//Link da api no vercel = https://json-server-api-seven.vercel.app/

async function listaProdutos() {
    const conexao = await fetch("https://json-server-api-seven.vercel.app/");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaProdutos(nome, valor, imagem) {
    const conexao = await fetch("https://json-server-api-seven.vercel.app/", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: `R$ ${valor}`,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível cadastrar o produto na lista.");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletarProdutos(ProdutoId) {
    try {
        const conexao = await fetch(`https://json-server-api-seven.vercel.app/${ProdutoId}`, {
            method: "DELETE",
        });

        const data = await conexao.json();
        return data;
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        throw error;
    }
}

export const conectaApi = {
    listaProdutos,
    criaProdutos,
    deletarProdutos
}