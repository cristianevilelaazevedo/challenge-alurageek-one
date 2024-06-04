import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProdutos(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await conectaApi.criaProdutos(nome, valor, imagem);
    await listaProdutos();
    formulario.reset();
    alert("Produto cadastrado com sucesso!");
}

formulario.addEventListener("submit", evento => criarProdutos(evento));

const limparBotao = document.querySelector("[data-limpar]");

limparBotao.addEventListener("click", () => {
    formulario.reset();
})

