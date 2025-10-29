//Importação
const leia = require('readline-sync')

//Variaveis

let salario, abono, salario_total

//Entrada de dados
console.log("Digite o seu salario: ")
salario = leia.questionFloat()

console.log("Digite o seu abono: ")
abono = leia.questionFloat()

// Junção das coisas 
salario_total = salario + abono

//Sáida de dados
console.log("O seu salario total é de: " + salario_total + "R$")
