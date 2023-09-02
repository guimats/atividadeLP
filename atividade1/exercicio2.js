import PromptSync from "prompt-sync"

const prompt= PromptSync()
const dataAtual = new Date();

const nascimento= prompt("Qual a data do seu nascimento? ex: DD/MM/YYYY ")
const dataNasc = nascimento.split('/')

const anoAtual = dataAtual. getFullYear()

const mesAtual = Number((dataAtual. getMonth())) + 1

const diaAtual = Number(dataAtual. getDate())

let idade = anoAtual-dataNasc[2]

if (mesAtual < dataNasc[1])
    idade--;
else if (mesAtual == dataNasc[1]){
    if (diaAtual < dataNasc[0])
        idade--;
}

console.log(`Sua idade é ${idade} anos`)