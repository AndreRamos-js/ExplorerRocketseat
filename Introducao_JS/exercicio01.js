

const maratonista = {
    name: 'Ricardo',
    age: 43,
    weight: 76.5,
};

console.log(`O maratonista ${maratonista.name} de ${maratonista.age} anos, pesa ${maratonista.weight}Kgs.`)
console.log('-'.repeat(20))

let maratona = [];

maratona = [
    maratonista
];

console.log(maratona)
console.log('-'.repeat(20))

const joao = {
    name: 'João',
    age: 56,
    weight: 85.5,
};

maratona[1] = joao;

console.log(maratona)
