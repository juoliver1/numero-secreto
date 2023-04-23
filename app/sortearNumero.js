const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarAleatorio()
//constante que recebe a função que gera os números aleatórios

function gerarAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}
//função que gera os números aleatórios, através da função math.random

const elementoMenorVelor = document.getElementById('menor-valor')
elementoMenorVelor.innerHTML = menorValor
// cria uma constante que recebe a busca pelo elemento que se encontra no html, através do id
// depois com o "innerHTML" adiciona o valor do menorNumero no html

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor
// cria uma constante que recebe a busca pelo elemento que se encontra no html, através do id
// depois com o "innerHTML" adiciona o valor do maiorNumero no html
console.log(numeroSecreto)