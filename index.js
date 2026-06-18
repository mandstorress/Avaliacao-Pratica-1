/*

// 1. Cálculo de Desconto Progressivo:
let valorCompra = 1000

if (valorCompra >= 1000){
    valorCompra -= valorCompra *= 0.2
    console.log(`Você recebeu um valor de 20% na sua compra: Valor final: R$ ${valorCompra}`)
} else if (valorCompra >= 500 && valorCompra < 1000){
    valorCompra -= valorCompra *= 0.1
    console.log(`Você recebeu um valor de 10% na sua compra. Valor final: R$ ${valorCompra}`)
} else {
    console.log(`Sem desconto. Valor final: R$ ${valorCompra}`)
}

// 2. Sistema de Pontos de Fidelidade: 

let pontuacao = 15
let categoria

switch (pontuacao){
    case 20:
        categoria = "Ouro"
        break;
    case 15:
        categoria = "Prata"
        break;
    case 10:
        categoria = "Bronze"
        break;
    default:
        categoria = "Categoria Inválida"
}

console.log(pontuacao, categoria)

// 3. Sequência de Fibonacci:

let num1 = 0
let num2 = 1

console.log(num1)
console.log(num2)

for(let  i = 2; i <= 10; i++){
    let proximoNumero = num1 + num2
    console.log(proximoNumero)

    num1 = num2
    num2 = proximoNumero
}

// 4. Simulador de Bateria:

let nivelBateria = 100

while (nivelBateria >= 0){
    console.log(`Nível da bateria: ${nivelBateria}%`)
    nivelBateria -= 10
}
console.log("Bateria esgotada")

// 5. Função para Calcular Dias de Vida: 

function calcularDiasDeVida(idadeEmAnos){
    return idadeEmAnos * 365 
}

const idade = 10

console.log(`Uma pessoa de ${idade} anos viveu aproximadamente ${calcularDiasDeVida(idade)}`)

// 6. Verificador de Aprovação Escolar:

let nota1 = 8
let nota2 = 9
let nota3 = 9.5
let nota4 = 10

let media = (nota1 + nota2 + nota3 + nota4) / 4

let frequencia = 95

if(media >= 6 && frequencia >= 75) {
    console.log(`Média: ${media.toFixed(2)}`)
    console.log(`Frequência: ${frequencia}%`)
    console.log("ALUNO APROVADO")
} else{
     console.log(`Média: ${media.toFixed(2)}`)
    console.log(`Frequência: ${frequencia}%`)
    console.log("ALUNO REPROVADO")
}

// 7. Menor Número da Lista: 

const listaDeNumeros = [10, 20, 30, 40]
let menorNumero = listaDeNumeros[0]

for(let numero of listaDeNumeros){
    if(numero < menorNumero){
        menorNumero = numero
    }
}

console.log(`O menor número é: ${menorNumero}`)

*/
