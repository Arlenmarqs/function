
let numero = 5
function calcularFatorial(numero) {
    let fatorial = 1;
    for (let index = 2; index <= numero; index++) {
        fatorial *= index;
    }
    return fatorial;
}
console.log(calcularFatorial(numero));