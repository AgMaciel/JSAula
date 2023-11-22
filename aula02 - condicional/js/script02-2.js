//escolha variavel
//    caso isso 
 //       isso 
//        fimcaso 
//    caso ... 
//fimescolha;


var num1 = Number(prompt("Digite o primeiro numero"));
var operador = prompt("digite o operador");
var num2 = Number(prompt("Digite o segundo numero"));

switch(operador){
    case "+":
        var resultado = num1 + num2;
        break;
    case "-":
        var resultado = num1 - num2;
        break;
    case "*":
        var resultado = num1 * num2;
        break;
    case "/":
        var resultado = num1 / num2;
        break;
    case undefined:
        alert("Operador digitado é inválido - Repita a operação");
        location.reload();
        break;
    case null:
        alert("Operador digitado é inválido - Repita a operação");
        location.reload();
        break;
    default:
        alert("Operador digitado é inválido - Repita a operação");
        location.reload();
        break;
}
    alert(`O  resultado da operação é de : ${resultado}`);
    location.reload()
    
    var novoCalculo = confirm("Deseja fazer um novo cálculo");

    if(novoCalculo == true){
        location.reload();
    }

