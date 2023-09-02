import PromptSync from "prompt-sync"

const prompt= PromptSync()

const sal= Number(prompt("Qual o seu salario? "))
const aumento=  Number(prompt("Qual a porcentagem do aumento? "))


const novo_sal = sal*(aumento/100) + sal

console.log(`Seu novo salário é ${novo_sal.toFixed(2)}`)