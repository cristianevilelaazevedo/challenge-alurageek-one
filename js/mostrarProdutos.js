import { conectaApi } from "./conectaApi.js";
// import { deletarProdutos } from "./deletarProdutos.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(id, imagem, nome, valor) {
    const produto = document.createElement('div');
    produto.className = "card-sticker";
    produto.innerHTML = `   <div class="content">
                                <div class="image">
                                    <img class="imagem" src="${imagem}" alt="">
                                </div>
                                <div class="info">
                                    <h3 class="nome">${nome}</h3>
                                    <p class="valor">${valor}</p>
                                </div>     
                                <button class="btn" type="reset" id="${id}" data-excluir>
                                    <i class='bx bx-trash'></i>
                                </button>               
                            </div> `

    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.id, elemento.imagem, elemento.nome, elemento.valor)))

        const btnsDeletar = document.querySelectorAll("[data-excluir]");
        btnsDeletar.forEach(btn => {
            btn.addEventListener("click", async(evento) => {
                evento.preventDefault();
                await conectaApi.deletarProdutos(btn.id);
            });
        });
    } catch {
        lista.innerHTML = `<h3 class="mensagem">Não foi possível carregar a lista de produtos.</h3>`
    }
}


listaProdutos();