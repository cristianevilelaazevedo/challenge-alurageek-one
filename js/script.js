const camposForm = document.querySelectorAll("[required]");
const form = document.querySelector(".adicionar");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const listaDados = {
        "nome": e.target.elemento["nome"].value,
        "valor": e.target.elemento["valor"].value,
        "imagem": e.target.elemento["imagem"].value
    }

    localStorage.setItem("mensagem", JSON.stringify(listaDados));

    e.target.reset();
})