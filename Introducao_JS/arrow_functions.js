

/*
const digaMeuNome = () => {
    console.log('André')
}

digaMeuNome()
*/

function digaMeuNome(name){
    console.log('Iniciando callback')

    name()

    console.log('Finalizando callback')
}

digaMeuNome(() => {
    console.log('Estou em uma callback')
})
