let numeros = [1, 2, 4, 5];

function encontrarNumeroFaltante(numeros) {
    for (let index = 0; index < numeros.length - 1; index++) {
        if (numeros[index + 1] !== numeros[index] + 1) {
            return numeros[index] + 1;
        }
    }
    return "Nenhum número faltando";
}
console.log(encontrarNumeroFaltante(numeros));