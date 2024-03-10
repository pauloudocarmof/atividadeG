import { question } from "readline-sync";
import { print, pedir_numero } from "./utils.js";
function main (){
   const tipo_carne = question('Informe tipo de carne(f/a/p): ')
   const kg_carne = pedir_numero('Informe quantidade comprada(kg): ')
   const pagamento = question('Pagamento com cartao Tabajara?(s/n) ')
   const valor_bruto = calcular_valor(tipo_carne,kg_carne)
   const desconto = desconto_cartao_tabajara(pagamento, valor_bruto)
   const saida_tipo_carne =  tipo_carne_saida(tipo_carne)
   const saida_pagamento = saida_cartao_tabajara(pagamento)
   const valor_final = (valor_bruto - desconto).toFixed(2)
   const cupom_fiscal = `
   -----------------------------------------
               CUPOM FISCAL
   -----------------------------------------
   TIPO DE CARNE: ${saida_tipo_carne}
   CARTAO TABAJARA? ${saida_pagamento}
   Kg: ${kg_carne}Kg
   PRECO BRUTO: R$${valor_bruto}
   DESCONTO: R$${desconto}
   PREÇO FINAL: R$${valor_final}
   ------------------------------------------`
   
   print(cupom_fiscal)
}

function calcular_valor(tipo_carne, kg_carne){
    
    if (tipo_carne === 'f' && kg_carne <= 5){
        return (kg_carne * 4.9).toFixed(2)
    }else if (tipo_carne === 'f' && kg_carne > 5){
        return (kg_carne * 5.8).toFixed(2)
    }else if (tipo_carne === 'a' && kg_carne <= 5){
        return (kg_carne * 5.9).toFixed(2)
    }else if (tipo_carne === 'a' && kg_carne > 5){
        return (kg_carne * 6.8).toFixed(2)
    }else if (tipo_carne === 'p' && kg_carne <= 5){
        return (kg_carne * 56.9).toFixed(2)
    }else if (tipo_carne === 'p' && kg_carne > 5){
        return (kg_carne * 7.8).toFixed(2)
    }
}
function desconto_cartao_tabajara(pagamento,valor_bruto){
   let vb = valor_bruto
    if (pagamento === 's'){
        return (vb - (vb * 0.1 )).toFixed(2)
    }else {return 0}
}
function tipo_carne_saida(tipo_carne){
    if (tipo_carne === 'f'){
        return 'Filé'
    }else if (tipo_carne === 'a'){
        return 'Alcatra'
    }else {
        return 'Picanha'
    }
}

function saida_cartao_tabajara (pagamento){
    if (pagamento === 's'){
        return 'Sim'
    }else {
        return 'Nao'
    }
}
main ()
