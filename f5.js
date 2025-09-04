// - Crie uma função chamada contaBancaria que simula uma conta bancária. Ela deve aceitar dois parâmetros: o saldo inicial da conta e uma ação ('depositar' ou 'sacar') e o valor a ser depositado ou retirado. A função deve retornar o novo saldo da conta após a ação.

function contaBancaria() {
    if (acao === depositar) {
        let novosaldo = saldo + valor
        console.log(`esse é o novo : ${novosaldo}`);
        
    }else if (acao === sacar) {
        let novosaldo = saldo - valor
        console.log(`esse é o novo : ${novosaldo}`);   
    }else {
        console.log(`Digite um valor válido`);
        
    }
}
contaBancaria(saldoInacial,acao,valor)