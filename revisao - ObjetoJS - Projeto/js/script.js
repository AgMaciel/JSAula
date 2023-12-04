class Filme{
    constructor(nome, descricao, data, diretor, categoria){
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.diretor = diretor;
        this.categoria = categoria;
    }
   
}

//seletores
const btnCadastrar = document.querySelector("btnCadastrarFilme");
const btnListar = document.querySelector("listaFilme");
//var cadastrarFilme = document.querySelector("#btnCadastrarFilme");

function cadastrar(){
    let nome = document.querySelector("#nome").value;
    let descricao = document.querySelector("#descricao").value;
    let data = document.querySelector("#date").value;
    let diretor = document.querySelector("#diretor").value;
    let categoria = document.querySelector("#categoria").value;

    var meuFilme = new Filme(
        nome,
        descricao,
        data,
        diretor,
        categoria
    );
   
    let resposta = document.querySelector("#resposta");
}

function listar(){
    let spanResposta = document.querySelector("resposta");

    spanResposta.innerHTML = `<div class="post">
    <h3>${meuFilme.nome}</h3>
    <p>${meuFilme.descricao}</p>
    <p>${meuFilme.data}</p>
    <p>${meuFilme.diretor}</p>
    <p>${meuFilme.categoria}</p>
    </div>`;
}

btnCadastrar.addEventListener('click', novoFilme);

function novoFilme(){
    // Obter os valores do formulário
    let nome = document.querySelector("#nome").value;
    let descricao = document.querySelector("#descricao").value;
    let data = document.querySelector("#date").value;
    let diretor = document.querySelector("#diretor").value;
    let categoria = document.querySelector("#categoria").value;
   
    let resposta = document.querySelector("#resposta");
    
    
    var meuFilme = new Filme(
        nome,
        descricao,
        data,
        diretor,
        categoria
    );
    

    spanResposta.innerHTML = `
    <div class="post">
        <h3>${meuFilme.nome}</h3>
        <p>${meuFilme.descricao}</p>
        <p>${meuFilme.data}</p>
        <p>${meuFilme.diretor}</p>
        <p>${meuFilme.categoria}</p>
    </div>
    `;


  // Limpar o formulário
  limparFormulario();

}


function limparFormulario() {
    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
    document.getElementById('diretor').value = '';
    document.getElementById('categoria').value = '';
}




