// - Crie uma função chamada calcularDesconto que recebe o valor original de um produto e o percentual de desconto. A função deve retornar o valor com o desconto aplicado.

function calcularDesconto(valorProduto,percentualDesconto) {
    let desconto = (valorProduto*percentualDesconto)/100
    let valorFinal = valorProduto - desconto
    return valorFinal
}
console.log(calcularDesconto(50,10));