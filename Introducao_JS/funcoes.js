

/*
function saudacoes() {
    console.log('Oi')
    console.log('Olá, bom dia!')
    console.log('Boa tarde, como vai?')
    console.log('Boa noite e bom descanço!')
    console.log('Tchau')
}

saudacoes()
*/

/*
const somar = function(num1, num2){
    console.log(num1 + num2)
}

somar(2,3)
*/

const sum = function(num1, num2){
    const total = num1 + num2 // Não é indicado criar variaveis sem definir as palavras chaves especiais (var, let, const)!
    return total
}

let num1 = 10
let num2 = 5

console.log(num1)
console.log(num2)
console.log(`A soma de ${num1} com ${num2} resulta em ${sum(num1, num2)}`)
