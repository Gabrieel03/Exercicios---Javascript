const leia = require("readline-sync")

let continuar = 'S'
let totalPessoasPesquisa = 0 
let somaIdades = 0
let totalBackend = 0 
let totalMulheresFrontend = 0
let totalHomensMobileMais40 = 0
let totalNaoBinariosFullStackMenos30 = 0


while (continuar) {

    let idade = leia.questionInt("Digite um numero: ")

    let identidadeGenero = leia.questionInt(
        "Digite a Identidade de Genero:\n" +
        "1  Mulher Cis | 2  Homem Cis | 3  Nao Binario\n" +
        "4  Mulher Trans | 5  Homem Trans | 6  Outros "
    )

    let pessoaDesenvolvedora = leia.questionInt(
        "Digite o Tipo de Pessoa Desenvolvedora:\n" +
        "1  Backend | 2  Frontend | 3  Mobile | 4  FullStack "
    )

    totalPessoasPesquisa++;
    somaIdades += idade;

    if (pessoaDesenvolvedora == 1) {
        totalBackend++;
    }

    if ((identidadeGenero == 1 || identidadeGenero == 4) && pessoaDesenvolvedora == 2) {
        totalMulheresFrontend++;
    }

    if ((identidadeGenero == 2 || identidadeGenero == 5) && pessoaDesenvolvedora == 3 && idade > 40) {
        totalHomensMobileMais40++;
    }

    if (identidadeGenero == 3 && pessoaDesenvolvedora == 4 && idade < 30) {
        totalNaoBinariosFullStackMenos30++;
    }

    continuar = leia.keyInYNStrict("Deseja continuar a leitura dos dados de um novo colaborador (S/N)?")

    console.log("--------------------")

}

if (totalPessoasPesquisa > 0) {
    let mediaIdade = somaIdades / totalPessoasPesquisa;
    console.log("\n*** RESULTADOS DA PESQUISA ***");
    console.log(`\nO número de pessoas desenvolvedoras Backend: ${totalBackend}`);
    console.log(`O número de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalMulheresFrontend}`);
    console.log(`O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalHomensMobileMais40}`);
    console.log(`O número de Não Binários desenvolvedores FullStack menores de 30 anos: ${totalNaoBinariosFullStackMenos30}`);
    console.log(`\nO número total de pessoas que responderam à pesquisa: ${totalPessoasPesquisa}`);

    console.log(`A média de idade das pessoas que responderam à pesquisa: ${mediaIdade.toFixed(2)} anos`);
} else {
    console.log("\nNenhum dado foi inserido na pesquisa.");
}