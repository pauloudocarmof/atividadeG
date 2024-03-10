//Leia um número e escreva se o número é inteiro ou decimal.
import { pedir_numero, print } from "./utils.js";
function main() {
    const numero = pedir_numero('Digite numero: ')
    const situaçao_numero = verificar_decimal(numero)
    print (situaçao_numero)
}
function verificar_decimal(numero){
    let n = numero
    if (n - Math.floor(n) > 0){
        return 'Numero decimal'
    }else {
        return 'Numero inteiro'
    }
}
main()