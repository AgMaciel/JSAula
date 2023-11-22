var inicio = confirm("Deseja iniciar a aplicação");

if (inicio) {
var idade = Number(prompt("Digite a sua idade"));


if (idade >= 1 && idade < 15) {
    alert(" Você é uma Criança");
} else if (idade >= 15 && idade <= 29) {
    alert("Você é um Jovem");
} else if (idade >= 30 && idade <= 59) {
    alert("Você é um Adulto");
} else if (idade >= 60 && idade <= 101){
    alert("Você é um Idoso");
}else{
    alert("Você digitou alguma informação equivocada, repita a informação");
}
};


    var confirmacao = confirm("Você deseja informar mais alguma idade?");

    if (confirmacao) {
        location.reload();
    } else {
        alert("Obrigado por utilizar nossa aplicação!");
        close;
    };