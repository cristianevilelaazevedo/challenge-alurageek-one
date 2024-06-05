import { conectaApi } from "./conectaApi.js";

export async function deletarProdutos(id){
    const conexao = await fetch(`https://json-server-api-seven.vercel.app/products/${id}`, {
        method: 'DELETE'
    });

    return conexao;
}