//2. Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.
import { question } from "readline-sync";

function main (){
    const letra = pedir_letra('Informe o sexo(M/F) ')

    verificacao_letra(letra)
}
function pedir_letra(mensagem){
    const l = (question(mensagem))
    return l 
}

function print(mensagem){
    console.log(mensagem)
}

function verificacao_letra(letra){
    if (letra  === 'F' || letra === 'f'){
        print('FEMININO')
    }else if (letra === 'M' || letra === 'm'){
        print('MASCULINO')
    }else{
        print('INVALIDO')
    }
}

main()