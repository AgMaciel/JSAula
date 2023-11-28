class Filme{
    constructor(){
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.diretor = diretor;
        this.categoria = categoria;
    }
   
}
var cadastrarFilme = document.querySelector("#btnCadastrarFilme");

cadastrarFilme.addEventListener('click', novoFilme);

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

    resposta.innerHTML = `
    <div class="post">
        <h3>${meuFilme.nome}</h3>
        <p>${meuFilme.descricao}</p>
        <p>${meuFilme.data}</p>
        <p>${meuFilme.diretor}</p>
        <p>${meuFilme.categoria}</p>
    </div>
                        `;

  // Adicionar o filme à lista
  adicionarFilmeNaLista(meuFilme);

  // Limpar o formulário
  limparFormulario();

}

function adicionarFilmeNaLista(filme) {
    // Obter a lista de filmes
    let listaFilmes = document.getElementById('listaFilmes');

    // Criar um elemento de lista para o filme
    let li = document.createElement('li');
    li.innerHTML = `<strong>${filme.nome}</strong><br>
                    <em>${filme.diretor}</em><br>
                    <span>${filme.data}</span><br>
                    <span>${filme.categoria}</span><br>
                    <p>${filme.descricao}</p>`;

    // Adicionar o elemento à lista
    listaFilmes.appendChild(li);
}

function limparFormulario() {
    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
    document.getElementById('diretor').value = '';
    document.getElementById('categoria').value = '';
}




