let number = 345.1425325;

console.log(number.toFixed(2).replace(".",",")) // A funcção toFixed resume o número após a virgula para 2 casas decimais.
                                                // E a função replace troca um valor por outro do que será exibido no console log.

let frase = 'Estudando JavaScript';

console.log('-'.repeat(20))

console.log(frase.toUpperCase()) // A funcção toUpperCase transforma o texto todo em maiusculo.
console.log(frase.toLowerCase()) // E a função toLowerCase transforma o texto todo em minusculo.

console.log('-'.repeat(20))

let texto = 'Eu amo programação!'

let meuArray = texto.split(" ")
console.log(meuArray)

let textoComUnderscore = meuArray.join("_")
console.log(textoComUnderscore)
