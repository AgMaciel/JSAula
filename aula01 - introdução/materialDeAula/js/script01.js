//caixas de texto
//alert("Olá mundo");
//confirm("Bom dia");
//prompt("Informe a sua idade:");

//console.log("Olha que legal");



//variaveis
//var
//variavel recebe valores e é sobrescritivel. Escopo global
//var nome = "Agis"



//const
// recebe, um valor que não pode ser sobreescrito. Escopo Global
//const pi = 3.1415956535

//let
// variavel do tipo temporária e possível sua sobreescrição. Escopo local
//function letTeste(){
 //   let numero = 0;
 //   numero = 1;
 //   console.log(numero);

//}
//const meunome = prompt("Informe o seu nome;");
//alert("Seja Bem vindo" + meunome + "ao Sistema de Atendimento do aluno");
// o comando abaixo usa CRASE para a concatenação de string
//${} desconsidera o elemento interno na string, podendo chamar variáveis e funções neste caso
//alert(`${meunome}, Seja Bem vindo ao Sistema de Atendimento do Aluno!`)


// Tipos de Valores
// STRING
//var texto = "ola mundo";

//NUMBER
//var number = 10;

//BOOLEAN
//var ligado = true;

//OBJETO
//var carro = [atributo = "algo"];

//array
// vai expplicar isto depois
//var compras = ["Açucar", "Arroz"];

//var compras = {
 //   a:"açucar",
 //   b:"Cristal do tipo"
//};


//opeadores aritmeticos
//+ somar (concatenar)
//- Subtrair
//* multiplicar
//** elevar um numero
/// dividir
//= atribuir
//++ somar mais um ao resultado
//-- subtrair um ao resultado

//function calculeConta(valorconta, divisao){
//alert("fechando a conta");
//var valorconta = prompt("informe o Valor da Conta:");
//var QtdClientes = prompt("informe o numero de clientes na mesa:");
//var divisao = parseFloat(valorconta) / parseFloat(QtdClientes);

//alert(`O total da conta foi de: ${valorconta}`+ `e o valor total individual foi de : ${(divisao.toFixed(2))}`+ `sendo um total de ${QtdClientes}`);
//}

//var numero = Number(prompt("informe um numero:"));
//var antecessor = numero + 1;
//var sucessor = numero -1;


var num1 = prompt("informe um numero:");
var sucessor = parseInt(nun1 + 1);
var antecessor = parseInt(nun1 - 1);

alert(`o antecessor do numero digitado é: ${sucessor}` + `e o sucessor é: ${antecessor}`);

