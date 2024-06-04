const camposForm = document.querySelectorAll("[required]");
const form = document.querySelector(".adicionar");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const listaDados = {
        "nome": e.target.elements["nome"].value,
        "valor": e.target.elements["valor"].value,
        "imagem": e.target.elements["imagem"].value
    }

    localStorage.setItem("mensagem", JSON.stringify(listaDados));

    e.target.reset();
})