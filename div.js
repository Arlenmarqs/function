let valor1 = 10
let valor2 = 5

function divisao(valor1, valor2) {
    if (valor2 === 0) {
    return("Erro: Divisão por zero não é permitida.");
    } else {
    return valor1 / valor2
    }
}
console.log(divisao(valor1, valor2));
