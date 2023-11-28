class Carro{
    constructor(marca, modelo, ano, cor, velocidadeMax){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = 0;
        this.velocidadeLimite = this.velocidadeAtual + this.velocidadeMax
    }
    acelerar(velocidadeAcelerada){
        if(velocidadeAcelerada < 0){
            return "Acelere o carro..."
        }else{
            if(velocidadeAcelerada + this.velocidadeAtual > this.velocidadeMax){
                return `sua velocidade atual é ${this.velocidadeAtual} não pode avançar esta velocidade`
            }else{
                this.velocidadeAtual += velocidadeAcelerada;
                return "Você acelerou "+ velocidadeAcelerada;
            }
        }
        //if(velocidadeAcelerada > 0 && this.velocidadeLimite <= this.velocidadeMax + this.velocidadeAcelerada)
          //  this.velocidadeAtual += velocidadeAcelerada;
    }
};
//velocidade atual + valor
   var btnCarro = document.querySelector("#btnCarro");

   btnCarro.addEventListener('click', criarCarro);

   function criarCarro(){
       let marca = document.querySelector("#marca").value;
       let modelo = document.querySelector("#modelo").value;
       let data = document.querySelector("#data").value;
       let cor = document.querySelector("#cor").value;
       let velocidadeMax = document.querySelector("#velocidadeMax").value;
       
       let resposta = document.querySelector("#resposta");

       var meuCarro = new Carro(
           marca,
           modelo,
           data,
           cor,
           velocidadeMax
           );

        resposta.innerHTML = `<div class="post">
        <h3>${meuCarro.modelo}</h3>
        <p>${meuCarro.marca}</p>
        <p>${meuCarro.ano}</p>
        <p>${meuCarro.cor}</p>
        <p>${meuCarro.velocidadeMax}</p>
        </div>`;
   }
   

    
    