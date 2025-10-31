const leia = require('readline-sync')

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

console.log("Vetor: " + vetor)

let numero = leia.questionInt("Digite o número que deseja encontrar: ")

let posicao = -1

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] == numero) {
        posicao = i
    }
}

if (posicao != -1) {
    console.log("O número está na posição: " + posicao)
} else {
    console.log("O número não foi encontrado!")
}