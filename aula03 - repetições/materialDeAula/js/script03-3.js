var filmes = ["Matrix - todos", "Blade Runner", "007- Todos", "Tropa de Elite", "Senhor Dos Anéis"];
//for(var contador = 0; contador < filmes.length ; contador++){
//    console.log(filmes[contador]);
//};

//util para iniciar e contar os arrays
filmes.forEach((cadaFilme) => {
    console.log(cadaFilme);
});

for(var cont = 0; cont <= 10; cont++){
    console.log(`${cont} X 8 = ${cont * 8}`);
};

console.log("------------------------------");
for(var tabuada = 1; tabuada <= 10; tabuada++){
    for(var cont = 0; cont <= 10; cont++){
        console.log(`${cont} X ${tabuada} = ${cont * 8}`);
    };
};
console.log("------------------------------");