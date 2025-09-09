
let numeros = [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 19, 20, 21, 22, 23, 24, 25];

function encontrarNumerosFaltantes(numeros) {
    let faltantes = [];
    for (let index = 0; index < numeros.length - 1; index++) {
        let atual = numeros[index];
        let proximo = numeros[index + 1];
        for (let numeros = atual + 1; numeros < proximo; numeros++) {
            faltantes.push(numeros);
        }
    }
    if (faltantes.length === 0) {
        return "Nenhum número faltando";
    }
    return faltantes;
}   
console.log(encontrarNumerosFaltantes(numeros));