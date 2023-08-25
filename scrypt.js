let numberOne = prompt("Insira o primeiro número:")
let numberTwo = prompt("Insira o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}.`)
alert(`A subtração dos dois números é: ${sub}.`)
alert(`A multiplicação dos dois números é: ${multi}.`)
alert(`A divisão dos dois números é: ${div.toFixed(2)}.`)
alert(`O resto da divisão dos dois números é: ${restDiv}.`)


if (sum % 2 == 0) {
  alert("O resultado da soma é Par.")

} else {
  alert("O resultado da soma é Ímpar.")
}

if (numberOne == numberTwo) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os númberos inseridos são diferentes.")
}