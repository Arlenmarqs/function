
let numeros = [1, 2, 3, 4, 5, 1, 2, 1, 6, 7, 1];
let valorParaContar = 1;  
function contarOcorrencias(numeros, valorParaContar) {
    let contador = 0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] === valorParaContar) {
            contador++;
        }
    }
    return contador;
}
console.log(contarOcorrencias(numeros, valorParaContar));