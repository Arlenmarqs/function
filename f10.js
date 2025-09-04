// - Crie uma função chamada filtrarMaioridade que recebe um array de objetos representando pessoas, cada uma com as propriedades nome e idade. Mostre as pessoas que são maiores de idade.
// const pessoas = [
//   { nome: 'Carlos', idade: 20 },
//   { nome: 'Ana', idade: 17 },
//   { nome: 'Bruna', idade: 22 },
//   { nome: 'Lucas', idade: 16 }
// ];

 const pessoas = [
   { nome: 'Carlos', idade: 20 },
   { nome: 'Ana', idade: 17 },
   { nome: 'Bruna', idade: 22 },
   { nome: 'Lucas', idade: 16 }
 ];
function filtrarMaioridade(pessoas) {
    let maioridade = []
    for (let index = 0; index < pessoas.length; index++) {
        if (pessoas[index].idade >= 18) {
            maioridade.push(pessoas[index])
        }
    } 
    return maioridade
}
console.log(filtrarMaioridade(pessoas));
