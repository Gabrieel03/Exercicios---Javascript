const leia = require('readline-sync')

let A, B, C

console.log("Digite o primeiro numero")
A = leia.questionInt()

console.log("Digite o segundo numero")
B = leia.questionInt()

console.log("Digite o terceiro numero")
C = leia.questionInt()

if (A + B > C) {
    console.log("A soma de A mais B é maior que C")
} else if (A + B < C) {
    console.log("A soma de A mais B é menor que C")
} else {
    console.log("A soma de A mais B é igual a C")
}