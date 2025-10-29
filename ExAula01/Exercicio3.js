//Importação
const leia = require('readline-sync')

//variaveis
let sl, ad ,he, de, salario_liquido

console.log("Digite o seu salario bruto: ")
sl = leia.questionFloat()

console.log("Digite o seu adicional norturno: ")
ad = leia.questionFloat()

console.log("Digite as suas horas extras: ")
he = leia.questionFloat()

console.log("Digite o seu desconto: ")
de = leia.questionFloat()

salario_liquido = sl + ad  + (he * 5) - de

console.log("Seu salario liquido e de: " + salario_liquido.toFixed(2) + "R$" )

