

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.acao = 'estudando'
}

const andre = new Pessoa('André', 20)
console.log(andre)
