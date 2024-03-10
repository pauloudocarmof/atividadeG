/*/Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.*/
import { question } from "readline-sync";
import { pedir_numero, print } from "./utils.js";

function main(){
    const tipo_combustivel = (question('Informe tipo combustivel(A/G)'))
    const litros_combustivel = pedir_numero('Informe litros de combustivel:')
    const valor = calcular_valor(litros_combustivel, tipo_combustivel)
    const desconto = calcular_desconto(tipo_combustivel,litros_combustivel,valor)
    print(`Valor integral: R$${valor}`)
    print(`Valor com desconto: R$${desconto}`)
  
}
function calcular_valor(litros_combustivel, tipo_combustivel){
    
    if (tipo_combustivel === 'a'){
        return (litros_combustivel * 1.9).toFixed(2)
    }else {
        return (litros_combustivel * 2.5).toFixed(2)
    }
}
function calcular_desconto(tipo_combustivel, litros_combustivel, valor){
    let v 
    if (tipo_combustivel === 'a' && litros_combustivel <= 20){
        v = (valor - (valor * 0.03)).toFixed(2)
    }else if (tipo_combustivel === 'a' && litros_combustivel > 20){
        v = (valor - (valor * 0.05)).toFixed(2)
    }else if (tipo_combustivel === 'g' && litros_combustivel <= 20){
        v = (valor - (valor * 0.04)).toFixed(2)
    }else if (tipo_combustivel === 'g' && litros_combustivel > 20){
        v = (valor - (valor * 0.06)).toFixed(2)
    }
    return v
}
main()