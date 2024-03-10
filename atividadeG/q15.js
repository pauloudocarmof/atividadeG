import { print, pedir_numero } from "./utils.js";
function main (){
    const kg_morango = pedir_numero('Informe quantidade kg de morangos comprados: ')
    const kg_maça= pedir_numero('Informe quantidade de Kg de maças comprados: ')
    const valor_inteiro = calcular_valor(kg_morango, kg_maça)
    const desconto = calcular_desconto(kg_morango,kg_maça,valor_inteiro)
    const valor_final = (valor_inteiro - desconto).toFixed(2)
    print(`_________________________________
    > Valor inteiro: ${valor_inteiro}
    > Desconto: ${desconto}
    > Valor com desconto: ${valor_final}
    _______________________________________`)
}

function calcular_valor(kg_morango,kg_maça){
    if (kg_morango <= 5 && kg_maça <= 5){
        return ((kg_morango * 2.5) + (kg_maça * 1.8)).toFixed(2)
    }else if (kg_morango <= 5 && kg_maça > 5){
        return ((kg_morango * 2.5) + (kg_maça * 1.5)).toFixed(2)
    }else if (kg_morango > 5 && kg_maça <= 5 ){
        return ((kg_morango * 2.2) + (kg_maça * 1.8)).toFixed(2)
    }else if (kg_morango > 5 && kg_maça > 5){
        return ((kg_morango * 2.2) + (kg_maça * 1.5)).toFixed(2)
    }

}
function calcular_desconto(kg_morango,kg_maça,valor_inteiro){
    let v = valor_inteiro
    if (kg_morango + kg_maça > 8){
        return (v * 0.1).toFixed(2)
    }else if (valor_inteiro > 25){
        return (v * 0.1).toFixed(2)
    }
}

main()