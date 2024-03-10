//11. Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do
//número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
//o 326 = 3 centenas, 2 dezenas e 6 unidades
//o 12 = 1 dezena e 2 unidades
import { pedir_numero, print } from '../atividadeG/utils.js';
function main (){
    const numero = pedir_numero('Informe numero(<1000):')
    const centena = separar_centena(numero)
    const dezena = separar_dezena(numero, centena)
    const unidade = separar_unidade(numero, dezena, centena)
    const texto = formatar_texto(centena, dezena,unidade)
    print(texto)
    

}
function separar_centena(numero){
    const centena = Math.floor(numero / 100)
    return centena
}

function separar_dezena(numero,centena){
    const dezena = Math.floor(numero / 10) - (centena * 10) 
    return dezena
}
function separar_unidade(numero,dezena, centena){
    const unidade = numero - ((centena * 100) + (dezena * 10))
    return unidade
}

function formatar_texto(centena, dezena, unidade){
    let c = centena
    let d = dezena 
    let u = unidade
    let resultado
    
    if (c === 0 && d > 1 && u > 1 ){
        resultado =  (`${d} dezenas e  ${u}  unidades`)
    }else if (d === 0 && c > 1 && u > 1){
        resultado =  (`${c} centenas e  ${u} unidades`)
    }else if (u === 0 && d > 1 && c > 1){
        resultado = (`${c} centenas e  ${u} unidades `)
    }else {
        resultado = `${c} centena, ${d} dezena e ${u} unidades`
    }
    return resultado
}

main()