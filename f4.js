// -Crie uma função chamada calcularIMC que recebe o peso (em kg) e a altura (em metros) de uma pessoa e retorna o Índice de Massa Corporal (IMC).
// A função deve retornar uma string com a classificação do IMC, de acordo com o valor:

// Abaixo de 18.5: "Abaixo do peso"
// Entre 18.5 e 24.9: "Peso normal"
// Entre 25 e 29.9: "Sobrepeso"	
// Entre 30 e 39.9: "Obesidade"
// Acima de 40: "Obesidade grave"


function calcularIMC(kg,altura) {
    let imc = kg/(altura*altura)

    if (imc < 18.5){
        console.log(`Abaixo do peso`);

       } else if (imc < 24.9 && imc > 18.5) {
            console.log(`Peso normal`);    
        }else if (imc < 29.9 && imc > 25) {
            console.log(`Sobrepeso`);    
        }else if (imc < 39.9 && imc > 30 ) {
            console.log(`Obesidade`);    
        }else if (imc > 40) {
            console.log(`Obesidade grave`);    
        }
    
}
calcularIMC(70,1.80)