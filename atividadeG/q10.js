//*10. Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
//sua média. A atribuição de conceitos obedece à tabela abaixo:
//Média de Aproveitamento Conceito
//Entre 9.0 e 10.0 A
//Entre 7.5 e 9.0 B
//Entre 6.0 e 7.5 C
//Entre 4.0 e 6.0 D
//Entre 4.0 e zero E
//O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
//“APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
import { question } from 'readline-sync'

import { pedir_numero, print, calcular_media} from '../atividadeG/utils.js'

function main (){
    const nota1 = pedir_numero('Informe NOTA1: ')
    const nota2 = pedir_numero('Informe NOTA2: ')
    
    const media = calcular_media(nota1, nota2)
    const conceito = analise_media(media)
    const condiçao_aluno = situaçao_aluno(conceito)

    const resultado = `
    >>>>>> BOLETIM <<<<<<
    ----------------------
    NOTA1: ${nota1}
    NOTA2: ${nota2}
    MEDIA: ${media}
    ------------------------
    CONCEITO: ${conceito}
    SITUAÇAO: ${condiçao_aluno}
    `
    print(resultado)
}

function analise_media(media){
    if (media >= 9){
        return 'A'
    }else if (media >= 7.5){
        return 'B'
    }else if (media >= 6)
        return 'C'
    else if (media >= 4){
        return 'D'
    }else{
        return'E'
    }
}
function situaçao_aluno(conceito){
    if (conceito === 'A' || conceito === 'B' || conceito === 'C'){
        return 'APROVADO'
    }else {
        return 'REPROVADO'
    }
}

main()

