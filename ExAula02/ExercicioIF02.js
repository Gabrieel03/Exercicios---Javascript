const leia = require('readline-sync')

let numero

numero = leia.questionInt("Digite um numero: ")

if (numero % 2 == 0) {
    console.log("O numero " + numero + " é par")
} else {
    console.log("O numero " + numero + " é impar")
}

if (numero > 0) {
    console.log("ele é positivo")
} else if (numero < 0) {
    console.log("ele é negativo")
} else {
    console.log("O numero é zero")
}
