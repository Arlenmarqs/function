// - Crie uma função chamada verificarMaioridade que recebe a idade de uma pessoa e retorna uma mensagem dizendo se ela é maior ou menor de idade. A maioridade é aos 18 anos.

function verificarMaioridade(idade) {
    if (idade >= 18) {
        console.log(`Parabéns já pode ser preso`);     
    }else {
        console.log(`Escapou de ser preso`);
        
    }
}
verificarMaioridade(10)