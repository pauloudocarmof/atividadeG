//1. Leia um número e mostre na tela se o número é positivo ou negativo.
import { question } from "readline-sync";

function main (){
    const numero = pedir_numero('Informe numero: ')

    verificacao_positivo(numero)
}
function pedir_numero(mensagem){
    const n = Number(question(mensagem))
    return n 
}

function print(mensagem){
    console.log(mensagem)
}

function verificacao_positivo(numero){
    if (numero < 0){
        print('NUMERO NEGATIVO')
    }else if (numero === 0 ){
        print('NEUTRO')
    }else{
        print('NUMERO POSITIVO')
    }
}

main()