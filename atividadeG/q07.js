/**As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe
contrataram para desenvolver o programa que calculará os reajustes. Escreva um algoritmo que leia o
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
o salários até R$ 280,00 (incluindo) : aumento de 20%
o salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
· o salário antes do reajuste;
· o percentual de aumento aplicado;
· o valor do aumento;
· o novo salário, após o aumento. */

import { question } from "readline-sync";

function main (){
print('>>>> Calcular Reajuste <<<<')
    const salario = pedir_salario('Informe salario: ')


    verificacao_reajuste(salario)
}
function pedir_salario(mensagem){
    const n = Number(question(mensagem))
    return n 
}

function print(mensagem){
    console.log(mensagem)
}

function verificacao_reajuste(salario){
   let reajuste 
   let valor_aumento 
   if (salario <= 280){
        reajuste = salario + (salario * 0.2)
        valor_aumento = salario * 0.2
    }else if (salario <= 700){
        reajuste = salario + (salario * 0.15)
        valor_aumento = salario * 0.15
    }else if(salario <= 1500){
    reajuste = salario + (salario * 0.1)
    valor_aumento = salario * 0.1
    }else{
        reajuste = salario + (salario * 0.5)
        valor_aumento = (salario * 0.5)
    }
    
    let percentual_aumento 
    
    if (salario <= 280){
        percentual_aumento = '20%'
    }else if(salario <= 700){
        percentual_aumento = '15%'
    }else if (salario <= 1500){
        percentual_aumento = '10%'
    }else{
        percentual_aumento = '05%'
    }
   
    print(`Valor inicial: ${salario}`)
    print(`Valor reajustado: ${reajuste}`)
    print(`Percentual de aumento: ${percentual_aumento}`)
    print(`Valor do aumento: ${valor_aumento} `)
    
    
}

main()