const btnTrocar = document.querySelector("#btnTrocar");
const btnTrocarDados = document.querySelector("#btntrocarTodos");

btnTrocar.addEventListener("click", trocarUmTermo);
btnTocarTodos.addEventListener("click", trocarTodosTermos);

function trocarUmTermo(){
    let blocoDeTexto = document.querySelector('#blocoDetexto');
    let removerTermo = document.querySelector('#removerTermo').value;
    let adicionarTermo = document.querySelector('#adicionarTermo').value;

    let blocoDeTextoFormatado = blocoDeTexto.value.replace(removerTermo, adicionarTermo);   
 
}


   

    blocoDeTexto.value = blocoDeTextoFormatado;

var jogos = ["Call Of Duty", "GTA", "outros"];

const btnPesquisar = document.querySelector("#btnPesquisar");

btnPesquisar.addEventListener("click", pesquisar);

function pesquisar(){
    let pesquisarInput = document.querySelector("#pesquisa").value;
    let resposta = jogos.includes(pesquisarInput);

    var resultado = jogos.includes(pesquisarInput);

    if(resultado == true){
        resposta.innerHTML = `Jogo encontrado! o jog pesquisado foi ${pesquisarInput}`;

    }else{
        resposta.innerHTML = `Jogo não encontrado`;
    }
}