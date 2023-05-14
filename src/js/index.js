const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "/src/imagens/sun.png");

    } else {
    // passo 5 - trocar a imagem do botão de alterar tema pra lua
    imagemBotaoTrocaDeTema.setAttribute("src", "/src/imagens/moon.png");
    };
});