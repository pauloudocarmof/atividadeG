/*4. Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
o "Aprovado", se a média alcançada for maior ou igual a sete;
o "Reprovado", se a média for menor do que sete;
o "Aprovado com Distinção", se a média for igual a dez./*/

import { question } from "readline-sync";

function main (){
print('>>>> Calcular média <<<<')
    const nota1 = pedir_nota('Informe nota1: ')
    const nota2 = pedir_nota('Informe nota2: ')

    verificacao_notas(nota1,nota2)
}
function pedir_nota(mensagem){
    const n = Number(question(mensagem))
    return n 
}

function print(mensagem){
    console.log(mensagem)
}

function verificacao_notas(nota1,nota2){
   const media = (nota1 + nota2) / 2
   
   if (media === 10){
        print('APROVADO COM DISTINÇÃO')
    }else if (media >= 7){
        print('APROVADO')
    }else{
        print('REPROVADO')
    }

    print(`Média: ${media}`)
}

main()