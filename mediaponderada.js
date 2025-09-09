let notas = [8, 7.5, 9, 6]
let pesos = [2, 3, 4, 1]

function calcularMediaPonderada(notas, pesos) {
    let somaPonderada = 0;
    let somaPesos = 0;
    for (let index = 0; index < notas.length; index++) {
        somaPonderada += notas[index] * pesos[index];
        somaPesos += pesos[index];
    }
    return somaPonderada / somaPesos;
}  
console.log(calcularMediaPonderada(notas, pesos));