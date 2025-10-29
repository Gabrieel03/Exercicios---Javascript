//Importação
const leia = require('readline-sync')

//Variaveis 
let n1,n2,n3,n4, media

console.log("Digite a primeira nota: ")
n1 = leia.questionFloat()

console.log("Digite a segunda nota: ")
n2 = leia.questionFloat()

console.log("Digite a terceira nota: ")
n3 = leia.questionFloat()

console.log("Digite a quarta nota: ")
n4 = leia.questionFloat()

media = n1 + n2 + n3 + n4 /4

console.log("A media das notas e de: " + media.toFixed(1))

