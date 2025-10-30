//Importação
const leia = require('readline-sync')

//Declarando Variaveis
let nome, codigo, salario, percentual, novoSalario, cargo

//Entrada de dados
console.log("=== REAJUSTE SALARIAL ===")
console.log("Códigos de Cargos:")
console.log("1 - Gerente........ 10%")
console.log("2 - Vendedor........ 7%")
console.log("3 - Supervisor........ 9%")
console.log("4 - Motorista.......... 6%")
console.log("5 - Estoquista......... 5%")
console.log("6 - Técnico de TI......... 8%")
console.log("=============================\n");

nome = leia.question("Digite o nome do colaborador: ")
codigo = leia.questionInt("Digite o codigo do cargo de (1 a 6): ")
salario = leia.questionFloat("Digite o salário atual (R$): ")


// Swich case
switch (codigo) {
    case 1:
        cargo = "Gerente"
        percentual = 10
        break
    case 2:
        cargo = "Vendedor"
        percentual = 7
        break
    case 3:
        cargo = "Supervisor"
        percentual = 9
        break
    case 4:
        cargo = "Motorista"
        percentual = 6
        break
    case 5:
        cargo = "Estoquista"
        percentual = 5
        break
    case 6:
        cargo = "Técnico de TI"
        percentual = 8
        break
    default:
        console.log("Código inválido! Digite um número entre 1 e 6.")
}

// Cálculo do novo salário
novoSalario = salario + (salario * percentual / 100)

// Saída de dados
console.log("\n=== RESULTADO ===")
console.log("Colaborador: " + nome)
console.log("Cargo: " + cargo)
console.log("Reajuste: " + percentual + "%")
console.log("Novo Salário: R$ " + novoSalario.toFixed(2))