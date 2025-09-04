let nome = prompt(`Digite seu nome`)
let nota1 = Number(prompt(`Digite sua primemira nota :`))
let nota2 = Number(prompt(`Digite sua segunda nota :`))

function media(nome,nota1,nota2) {
    let media = (nota1 + nota2)/2
    alert(`A média do ${nome} é ${media}`)
}
media(nome,nota1,nota2)