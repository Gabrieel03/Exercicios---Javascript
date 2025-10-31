const leia = require('readline-sync')

let i
let num1 = leia.questionInt("Digite o primeiro numero do imtervalo: ")
let num2 = leia.questionInt("Digite o segundo numero do intervalo: ")

if(num1 < num2 ){
    console.log("Intervalo invalido! ")
}else{
    console.log("Intervalo entre "+ num1 + " e " + num2 )
}

    for( i = num1; i<= num2; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} e mutiplo de 3 e 5`)
    }
}