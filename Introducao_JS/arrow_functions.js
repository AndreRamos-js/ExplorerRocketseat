

/*
const digaMeuNome = () => {
    console.log('André')
}

digaMeuNome()
*/

function executarCallback(callback){
    
    console.log('Iniciando callback')
    
    callback()

    console.log('Finalizando callback')
}

executarCallback(() => {
    console.log('Estou em uma callback')
})
