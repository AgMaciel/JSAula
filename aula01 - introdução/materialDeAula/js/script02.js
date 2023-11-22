alert("Calculadora do Cidadão");

//a opção Numer() converte o valor do prompt para um valor numerico
var num1 = Number(prompt("informe o 1º numero da operação:"));
var num2 = Number(prompt("Digite o seu 2º número da operação:"));

//Aqui a gente esta convertendo o valor paa float (decimais), podendo tambem utilizar o parseInt(), para converter para inteiro
var soma = parseFloat(num1) + parseFloat(num2);

alert(`o resultado da operação é: ${soma}`);

//parseInt(total*100)/100; - este caso possibilita a conversão do resultado em 2 casas decimais (milhar para centena)