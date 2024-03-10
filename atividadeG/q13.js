/*/Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente". */

import { question } from "readline-sync";
import { print } from "./utils.js";
function main(){
   const pergunta1 = (question('Telefonou para a vitima? (s/n) '))
   const pergunta2 = (question('Esteve no local do crime? (s/n) '))
   const pergunta3 = (question('Mora perto da vitima? (s/n) '))
   const pergunta4 = (question('Devia para a vitima? (s/n) '))
   const pergunta5 = (question('Ja trabalhou com a vítima? (s/n) '))
   const pontos = verifica_pontos(pergunta1,pergunta2, pergunta3,pergunta4,pergunta5)
   const inocencia = verificao_de_inocencia(pontos)
   print(inocencia)
}

function verifica_pontos(pergunta1,pergunta2,pergunta3,pergunta4,pergunta5){
    let pontos
    let p1 = pergunta1
    let p2 = pergunta2
    let p3 = pergunta3
    let p4 = pergunta4
    let p5 = pergunta5
    if (p1 === 's'){
        pontos = Number(1)
    }
    if (p2 === 's'){
        pontos += 1
    }
    if (p3 === 's'){
        pontos += 1
    }if (p4 === 's'){
        pontos += 1
    }if (p5 === 's'){
        pontos += 1
    }
      return pontos
}
function verificao_de_inocencia (pontos){
    if (pontos === 5){
        return 'ASSASSINO!'
    }else if (pontos >= 3){
        return 'Cunplice'
    }else if (pontos >= 2){
        return 'Suspeita'
    }else{
        return 'inocente'
    }
}
main()