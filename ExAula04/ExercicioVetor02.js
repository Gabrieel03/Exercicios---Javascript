const readlineSync = require('readline-sync');

const TAMANHO_VETOR = 10;
let vetor = new Array(TAMANHO_VETOR);
let somaTotal = 0;
let elementosIndicesImpares = 0
let elementosPares = 0

console.log("--- Digite 10 números inteiros para preencher o vetor ---")

for (let i = 0; i < TAMANHO_VETOR; i++) {
    const numero = readlineSync.questionInt(`Digite o numero da posicao ${i + 1}/${TAMANHO_VETOR}: `);

    vetor[i] = numero;
}

for (let i = 0; i < vetor.length; i++) {
    const elemento = vetor[i];

    somaTotal += elemento;

    if (i % 2 !== 0) {
        elementosIndicesImpares += elemento + " ";
    }

    if (elemento % 2 === 0) {
        elementosPares += elemento + " ";
    }
}

const media = somaTotal / vetor.length;

console.log("\n*** RESULTADOS ***");
console.log("------------------");
console.log(`Vetor lido: [${vetor.join(', ')}]`);
console.log("------------------");

console.log("Elementos nos índices ímpares:");
console.log(elementosIndicesImpares.trim());

console.log("\nElementos pares:");
console.log(elementosPares.trim());

console.log("\nSoma:");
console.log(somaTotal);

console.log("\nMédia:");
console.log(media.toFixed(2));

console.log("------------------");