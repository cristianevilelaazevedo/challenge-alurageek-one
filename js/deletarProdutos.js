import { conectaApi } from "./conectaApi.js";

// async function deletarProdutos(ProdutoId) {
//     await conectaApi.deletarProdutos(ProdutoId);
// }

// export {deletarProdutos};

export async function deletarProdutos(id){
    const conexao = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });

    return conexao;
}