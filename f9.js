// - Crie uma função chamada converterTemperatura que converte a temperatura de Celsius para Fahrenheit e vice-versa. A função deve receber dois parâmetros: o valor da temperatura e a unidade de origem ('C' para Celsius ou 'F' para Fahrenheit). Ela deve retornar o valor convertido.


function converterTemperatura(temperatura,unidadeOriginal) {
    if (unidadeOriginal === "C") {
        return ((temperatura * 9/5) + 32)
    }else if (unidadeOriginal === "F") {
        return ((temperatura - 32) * 5/9)
    }
}
console.log(converterTemperatura(20,"C"));