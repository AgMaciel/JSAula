
var btnCalcular = document.querySelector("#btnCalcular");
//para criar a funcao voce precisa colocar funcao(){}
//No caso de chama-la vc não precisa colocar o ()
btnCalcular.addEventListener("click", calcular );

function calcular(){
    //var empregado = document.getElementById("empregado");
    let empregado = document.querySelector("#empregado").value;
    let filhos = document.querySelector("#filhos").value;
    let salario = document.querySelector("#salario").value;
    let resultadoSpan = document.querySelector("#resultado")

if(filhos == 0 || salario == 0){
    resultadoSpan.innerHTML = `Dados Inválidos, digite as informações corretamente`;
} else if(salario <= 806.80){
        let resultado = filhos * 41.37;
        resultadoSpan.innerHTML = `O Salário família do empregado ${empregado}, é de ${resultado}`;
    }else if(salario >= 806.80 && salario <=1212.64){
        let resultado = filhos * 29.16;
        resultadoSpan.innerHTML = `O Salário família do empregado ${empregado}, é de ${resultado}`;
    }else{
        resultadoSpan.innerHTML = `Não há salário família para valores recebidos acima de ${salario}`;
    }
}
