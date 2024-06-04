import { conectaApi } from "./conectaApi.js";

export async function deletarProdutos(id){
    const conexao = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });

    return conexao;
}