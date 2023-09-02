import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt= PromptSync()

const name= prompt(chalk.red("Qual o seu nome? "))
console.log(chalk.blue.bgGreen.bold(`Ola, ${name}`))

const valor1 = Number(prompt("Qual o valor 1? "))
const valor2 = Number(prompt("Qual o valor 2? "))

const total = valor1+valor2

console.log(`Resultado é ${total.toFixed(2)}`)

/*npm init para iniciar o node module
após isso, nmp i prompt-sync e npm i chalk
.toFixed para escolher quantas casas decimais mostrar*/