/**Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */

import { question } from "readline-sync";

function main (){
    const turno = pedir_turno('Informe o turno de estudo(M/V/N): ')

    verificacao_turno(turno)
}
function pedir_turno(mensagem){
    const t = (question(mensagem))
    return t 
}

function print(mensagem){
    console.log(mensagem)
}

function verificacao_turno(turno){
    if (turno  === 'M' || turno === 'm'){
        print('BOM DIA')
    }else if (turno === 'V' || turno === 'v'){
        print('BOA TARDE')
    }else if(turno === 'N' || turno === 'n'){
        print('BOA NOITE')
    }else{
        print('INVALIDO')
    }
}

main()