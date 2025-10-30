// Importação
const leia = require('readline-sync')

//Declarando variaves
let codigo, quantidade, opcao, preco, total

//Entrada de dados 
console.log("=== CARDÁPIO ===")
console.log("1 - Cachorro Quente........ R$ 10.00")
console.log("2 - X-Salada........ R$ 15.00")
console.log("3 - X-Bacon........ R$ 18.00")
console.log("4 - Bauru........ R$ 12.00")
console.log("5 - Refrigerante........ R$ 8.00")
console.log("6 - Suco de Laranja........ R$ 13.00")
console.log("=============================\n");

//Processamento
codigo = leia.questionInt("Digite um numero de (1 a 6): ")
quantidade = leia.questionInt("Digite a quantidade: ")

//Cases
switch (codigo) {
    case 1:
        opcao = "Cachorro Quente";
        preco = 10.00;
        break;
}

switch (codigo) {
    case 2:
        opcao = "X-Salada";
        preco = 15.00;
        break;
}

switch (codigo) {
    case 3:
        opcao = ("X-Bacon");
        preco = 18.00;
        break;
}

switch (codigo) {
    case 4:
        opcao = ("Bauru");
        preco = 12.00;
        break;
}

switch (codigo) {
    case 5:
        opcao = ("Refrigerante");
        preco = 8.00;
        break;
}

switch (codigo) {
    case 6:
        opcao = ("Suco de Laranja");
        preco = 13.00;
        break
    default: ("Opção invalidade")
}

//Saida de dados 
total = preco * quantidade
console.log("\nProduto " + opcao)
console.log("Quantidade " + quantidade)
console.log("O total a se pagar é: R$ " + total.toFixed(2))