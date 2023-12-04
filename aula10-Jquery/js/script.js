//instalação
//Vistie: https://jquery.cp,/dpwnload
// clicar na opção "Download the uncompressed, development Jquery 3.7.1"
// aberto o arquivo, aperte com o botão direito e salvar pagina como .. e salve em um local de sua prefernecia!

//Seletor JQUERY = $(# ou  .  ou ELEMENTO )
var titulo = $("#tituloDaPagina").text("JQUERY aula");

console.log(titulo);

//como faria se não fosse com o JQUERY
//paragrafo.addEventListener ("mouseover", consoleLisar)
//function consoleListar(){
//  console.log("Este é o Texto do site");    
//}

var pagagrafo = $("#textoDaPagina").on("mouseover", function() {
    console.log("Este é o texto do site")
});

//comportamento
//JQUERY tem capacidade de avaliar valores não definidos e vazios
var usuario = "Victor";
var usuarioIndefinido = undefined;

var usuarioResultado = $("#testeIndefinido").text(usuarioIndefinido);

//algoritmo de contagem de caracteres
var blocoDeTexto = $("#blocoDeTexto").on("input", function(){
    console.log("Fui apertado !");
    let blocoDeTextoValue = $("#blocoDeTexto").val();
    let resposta = $("#numCaracteres");

    var contagem = blocoDeTextoValue.length;
    resposta.text(contagem);
});

