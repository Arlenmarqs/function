// - Faca uma calculadora


function calculadora(numero1,numero2,operacao) {
let resultado;
    if (operacao === "adição") {
        resultado = numero1 + numero2
    }else if (operacao === "multiplicação") {
        resultado = numero1 * numero2
    }else if (operacao === "divisão") {
        resultado = numero1 / numero2
    }else if (operacao === "subtração") {
        resultado = numero1 - numero2
    }else {
        console.log(`Digite algo válido`);
        
    }
    return resultado;
}
console.log(calculadora(3,9,"divisão"));