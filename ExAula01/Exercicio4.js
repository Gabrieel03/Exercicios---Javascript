//Importação
const leia = require('readline-sync')

//Variaveis 
let n1,n2,n3,n4,produto

// Entrada de dados 
console.log("Digite o numero 1: ")
n1 = leia.questionFloat()
console.log("Digite o numero 2: ")
n2 = leia.questionFloat()
console.log("Digite o numero 3: ")
n3 = leia.questionFloat()
console.log("Digite o numero 4: ")
n4 = leia.questionFloat()

//Saida de dados 
produto = (n1 * n2) - (n3 * n4)
console.log("O resultado da diferença entre os produtos e de: " + produto)