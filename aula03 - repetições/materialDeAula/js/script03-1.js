//REPETIÇÕES
//WHILE (VERIFICA E DEPOIS FAZ)

var contador = 0;

//enquanto (condicao) faca

//contador + 1
//fimenquanto

while(contador <= 10) {
    console.log(contador);
    // ou vc pode fazer assim: contador = contador +1;
    contador++;
}

// do while (faz e verifica)

//no portugol
//repita
//...
//...
//contador
//ate ... (condição)

var cont = 0;

do{
    console.log(`Fiz ${cont} VEZES`);
    cont++;
}while(cont <=10);

//for
//para (var, condição, controlador)
//...
//...
//fimpara

for(let controlador = 1; controlador <= 10; controlador++){
    console.log(controlador+" -For é Legal");
}
// for each
console.log("elementos");
var elementos = ["Elemento-1","Elemento-2","Elemento-3"];

//funcao pseudofunction, anônima
elementos.forEach((cadaelemento) => {
    
    console.log(cont+" - " +cadaelemento)
});
