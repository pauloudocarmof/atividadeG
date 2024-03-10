/*5. Leia o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é
sempre pelo mais barato./*/

import { question } from "readline-sync";

function main (){
print('>>>> Melhor compra! <<<<')
    const preço_produto1 = pedir_preço('Informe preco produto1: ')
    const preço_produto2 = pedir_preço('Informe preco produto2: ')
    const preço_produto3 = pedir_preço('Informe preco produto3: ')

    verificacao_preço(preço_produto1,preço_produto2,preço_produto3)
}
function pedir_preço(mensagem){
    const n = Number(question(mensagem))
    return n 
}

function print(mensagem){
    console.log(mensagem)
}

function verificacao_preço(preço_produto1,preço_produto2,preço_produto3){
    let menorpreço = preço_produto1
    if (preço_produto2 < menorpreço && preço_produto2 < preço_produto3){
        menorpreço = preço_produto2
    }else if (preço_produto3 < menorpreço){
       menorpreço = preço_produto3
    }

    let resultado 

    if (menorpreço === preço_produto1){
        resultado = 'Produto1'
    }else if (menorpreço === preço_produto2){
        resultado = 'Produto2'
    }else{
        resultado = 'Produto3'
    }
    print(`Melhor opção de compra: ${resultado}`)
}

main()