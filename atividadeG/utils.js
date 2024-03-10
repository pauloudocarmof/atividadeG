import { question } from "readline-sync"

export function pedir_numero(mensagem){
   return Number(question(mensagem))}

   export function print (mensagem){
    console.log(mensagem)
}
export function calcular_media(numero1,numero2,){
    return ((numero1 + numero2) / 2)
}