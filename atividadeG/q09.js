/**9. Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
valor deve aparecer valor inválido. */
import { question } from "readline-sync";

function main (){
    const numero = pedir_numero('Informe numero: ')
    const resultado =  verificar_data(numero)
    print(resultado)
}
function pedir_numero(mensagem){
    const n = Number(question(mensagem))
    return n 
}
function verificar_data(numero){
    if (numero === 1){
        return 'Domingo'
    }else if (numero === 2){
        return 'Segunda'
    }else if (numero === 3){
        return 'Terça'
    }else if (numero === 4){
        return 'Quarta'
    }else if (numero === 5){
        return 'Quinta'
    }else if (numero === 6){
        return  'Sexta'
    }else if (numero === 7){
        return 'Sabado'
    }else{
        return 'INVALIDO'
    }
}
function print (mensagem){
    console.log(mensagem)
}
main ()

