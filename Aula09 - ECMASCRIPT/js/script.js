const btnTrocar = document.querySelector("#btnTrocar");
const btnTrocarDados = document.querySelector("#btnTrocarDados"); // Corrigir o ID

btnTrocar.addEventListener("click", trocarUmTermo);
btnTrocarDados.addEventListener("click", trocarTodosTermos);

function trocarUmTermo(){
    let blocoDeTexto = document.querySelector('#blocoDeTexto'); // Corrigir o ID
    let removerTermo = document.querySelector('#removerTermo').value;
    let adicionarTermo = document.querySelector('#adicionarTermo').value;

    let blocoDeTextoFormatado = blocoDeTexto.value.replace(removerTermo, adicionarTermo);
    
    blocoDeTexto.value = blocoDeTextoFormatado; // Mover esta linha para dentro da função
}

var jogos = ["Call Of Duty", "GTA", "outros"];

const btnPesquisar = document.querySelector("#btnPesquisar");

btnPesquisar.addEventListener("click", pesquisar);

function pesquisar(){
    let pesquisarInput = document.querySelector("#pesquisa").value;
    let resposta = document.querySelector("#resposta"); 

    var resultado = jogos.includes(pesquisarInput);

    if(resultado == true){
        resposta.innerHTML = `Jogo encontrado! O jogo pesquisado foi ${pesquisarInput}`;
    } else {
        resposta.innerHTML = `Jogo não encontrado`;
    }
}
