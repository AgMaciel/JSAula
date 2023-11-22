// > maior que
// >= maior ou igual
// < menor que
// <= menor ou igual
// != diferente (<>)
// significado do sinal de = (
//    = recebe um valor,
//    == compara valor,
//    === compara valor e tipo 
//    )


//OPERADORES ALTERNÁRIOS
// && E (DUAS CONDIÇÕES DEVERÃO SER IGUAIS EM RESULTADOS) - O RESULTADO DEVE SER (VERDADEIRO && VERDADEIRO)
// || OU (SE UMA DAS CONDIÇÕES FOR VERDADEIRA SERÁ EXECUTADO) - O RESULTADO DEVE TER PELO MENOS UM VALOR VERDADEIRO
// ! - NÃO (SE NÃO FOR A CONDIÇÃO)

// CONDICIONAIS
// IF (SE SENAO)

//if(true){
//    console.log("Sou verdadeiro");
//}else{
 //   console.log("Sou falso");
//}
//verificar idade
var idade = Number(prompt("qua é a sua idade"));

if(idade >= 18){
    alert("Welcome to Web Site");
}else{
    if(idade == 0){
        alert("Idade inválida, repita a operação com idade válida");
        location.reload();
    }else{
        alert("Unfortunatly you dont have necessary year !");
    location.href = "https://www.youtube.com/";
    };
    
}


// condição ? bloco1 : bloco2 - isto refere-se ao if ternário
//Ex: X>18 ? alert("legal - condição verdadeira") : ("maneiro - condição falsa");