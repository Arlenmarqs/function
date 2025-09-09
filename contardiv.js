
let numDiv = 42;
function contarDivisores(numDiv) {
    let contador = 0;
    for (let index = 1; index <= numDiv; index++) {
        if (numDiv % index === 0) {
            contador++;
        }
    }
    return contador;
}   
console.log(contarDivisores(numDiv));