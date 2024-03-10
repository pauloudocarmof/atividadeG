//3. Leia uma letra e verifique se a letra digitada é vogal ou consoante.
import { question } from "readline-sync";

function main (){
    print('>>> Vogal ou consoante? <<<')
    const letra = pedir_letra('informe uma letra: ')

    verificacao_vogal(letra)
}
function pedir_letra(mensagem){
    const l = (question(mensagem))
    return l 
}

function print(mensagem){
    console.log(mensagem)
}

function verificacao_vogal(letra){
    if (letra  === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u '){
        print('VOGAL')
    }else if (letra  === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U'){
        print('VOGAL')
    }else{
        print('CONSOANTE')
    }
}

main()