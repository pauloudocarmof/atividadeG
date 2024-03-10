/**Para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que
depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a
11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde
ao salário bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a
quantidade de horas trabalhadas no mês.
Desconto do IR:
o Salário Bruto até R$ 900,00 (inclusive) - isento
o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5%
o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10%
o Salário Bruto acima de R$ 2.500,00 - desconto de 20%
Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e
a quantidade de hora é 220.
Salário Bruto: (5 * 220) : R$ 1100,00
(-) IR (5%) : R$ 55,00
(-) INSS ( 10%) : R$ 110,00
FGTS (11%) : R$ 121,00
Total de descontos : R$ 165,00
Salário Liquido : R$ 935,00 */
import { question } from "readline-sync";
function main (){
    const horas_trabalhadas = get_number('Informe horas trabalhadas: ')
    const valor_hora = get_number('Informe valor hora: ')
    const salario = calcular_salario(horas_trabalhadas, valor_hora)
    //desconsto 
    const ir = calcular_IR(salario)
    const sindicato = calcular_sindicato(salario)
    const inss = calcular_inss(salario)
    const fgts = calcular_fgts(salario)
    
    // somar descontos
    const descontos = (ir + sindicato + inss)

// calcular contracheque
   const salario_liquido = salario - descontos 
    const contracheque = `
    ---------------------------------------------
    .... CONTRACHEQUE ....
    Salario Bruto: R$${salario}
    (-)IR: R$${ir},00
    (-)Sindicato: R$${sindicato}
    (-)Inss: R$${inss}
    FGTS: R$${fgts}
    Salario Liquido:R$${salario_liquido}
    --------------------------------------------`
print(contracheque)
}

function calcular_salario (horas_trabalhadas, valor_hora){
    const valor_salario = horas_trabalhadas * valor_hora
    return valor_salario
}
function get_number (mensagem){
    const numero = Number(question(mensagem))
    return numero
}

function print(mensagem) {
    console.log(mensagem)
}

function calcular_IR (salario){
    let valor_IR 
    
    if (salario >= 2500){
        valor_IR = salario * 0.2
    }else if (salario > 1500 ){
        valor_IR = salario * 0.1
    }else if (salario > 900){
        valor_IR = salario * 0.05
    }else{
        valor_IR = 0
    }
    return valor_IR
}

function calcular_sindicato(salario){
    const n = salario * 0.03
    return n
}

function calcular_inss(salario){
    const n = salario * 0.1
    return n
}

function calcular_fgts (salario){
    const n = salario * 0.11
    return n
}
main()