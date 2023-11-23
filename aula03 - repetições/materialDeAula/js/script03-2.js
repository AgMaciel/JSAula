//array
//var produto1 = "tenis";
//var produto1 = "Bola";
//var produto1 = "VideoGame";



var estoqueProdutos = ["Tenis", "Bola", "VídeoGame"];
console.log(estoqueProdutos);

//indice
console.log(estoqueProdutos[1]);

//metodo

//var frutas = array();
//    frutas[0] = "Banana";
//    frutas[1] = "Goiaba";
//    frutas[2] = "Morango";
//    frutas[3] = "Maracujá";
//    console.log(frutas);

//comandos array
//push - adiciona um elemento na ultima posição
estoqueProdutos.push("Chocolate");
console.log(estoqueProdutos);

//unshift - adiciona um elemento
estoqueProdutos.unshift("Refrigerante");
console.log(estoqueProdutos);

//pop remove um elemento da ltima posição
estoqueProdutos.pop();
console.log(estoqueProdutos);

//shift - remove o primeiro elemento de um array
estoqueProdutos.shift();
console.log(estoqueProdutos);

//slice - (indices, quantos indices, novo elemento)
console.log(estoqueProdutos.slice(1,0,"Chocolate"));

//includes - busca um item do array
estoqueProdutos.includes("Chocolate");
console.log(estoqueProdutos);

//length - quantidade de elementos do array
estoqueProdutos.length(`Existem no estoque ${estoqueProdutos.length} itens de produtos`);
console.log(estoqueProdutos);

