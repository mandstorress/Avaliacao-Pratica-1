/*

// 1. Cálculo de Desconto Progressivo: simule o cálculo de um desconto em uma loja. Declare uma variável 
valorCompra e atribua um valor numérico a ela. A regra de desconto é a seguinte: se o valor da compra for 
maior ou igual a R$ 1.000,00, o desconto será de 20%; se for maior ou igual a R$ 500,00 (mas menor que R$ 
1.000,00), o desconto será de 10%; caso contrário, não haverá desconto. Calcule o valor final da compra já com 
o desconto aplicado e exiba no console uma mensagem clara, como: "Valor final: R$ [valor]". 

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

// 2. Sistema de Pontos de Fidelidade: : desenvolva um programa que determine a pontuação de um cliente com 
base em sua categoria de fidelidade. Crie uma variável categoria e atribua a ela uma das seguintes strings: 
"Ouro", "Prata" ou "Bronze". Utilizando uma estrutura switch, exiba no console a quantidade de pontos que o 
cliente ganha: 20 pontos para "Ouro", 15 para "Prata" e 10 para "Bronze". Inclua um caso default para exibir a 
mensagem "Categoria inválida" se a variável não corresponder a nenhuma das opções. 

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

// 3. Sequência de Fibonacci:  a sequência de Fibonacci é uma série de números onde cada número é a soma 
dos dois anteriores, começando com 0 e 1. Crie um script que use um laço for para gerar e exibir no console os 
10 primeiros números desta sequência, que são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

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

// 4. Simulador de Bateria: : escreva um programa que simule o descarregamento de uma bateria de celular. Crie 
uma variável nivelBateria iniciando com o valor 100. Use um laço while para diminuir o nível da bateria em 10 
unidades a cada iteração (simulando a passagem de uma hora). O laço deve continuar enquanto o nível for 
maior que 0. A cada "hora", exiba o nível atual. Ao final do laço, exiba a mensagem "Bateria esgotada".

let nivelBateria = 100

while (nivelBateria >= 0){
    console.log(`Nível da bateria: ${nivelBateria}%`)
    nivelBateria -= 10
}
console.log("Bateria esgotada")

// 5. Função para Calcular Dias de Vida: crie uma função chamada calcularDiasDeVida que aceite um único 
parâmetro: idadeEmAnos. A função deve calcular e retornar o número aproximado de dias que uma pessoa 
viveu, baseando-se na premissa de que um ano tem 365 dias. Fora da função, chame-a com um valor de idade 
e exiba o resultado de forma clara no console, por exemplo: "Uma pessoa de 30 anos viveu aproximadamente 
10950 dias."

function calcularDiasDeVida(idadeEmAnos){
    return idadeEmAnos * 365 
}

const idade = 10

console.log(`Uma pessoa de ${idade} anos viveu aproximadamente ${calcularDiasDeVida(idade)}`)

// 6. Verificador de Aprovação Escolar: desenvolva um script que determine se um aluno foi "Aprovado" ou 
"Reprovado". Para isso, declare variáveis para as quatro notas bimestrais e uma para a frequência em 
porcentagem (ex: 85 para 85%). O aluno só é aprovado se atender a duas condições simultaneamente: ter uma 
média final igual ou superior a 6 e uma frequência igual ou superior a 75%. Calcule a média, verifique as 
condições e exiba o resultado final no console. 

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

// 7. Menor Número da Lista:  declare um array de números chamado listaDeNumeros. Use um laço for...of para 
percorrer o array e encontrar o menor número entre eles. Ao final, exiba o maior número encontrado no console.

const listaDeNumeros = [10, 20, 30, 40]
let menorNumero = listaDeNumeros[0]

for(let numero of listaDeNumeros){
    if(numero < menorNumero){
        menorNumero = numero
    }
}

console.log(`O menor número é: ${menorNumero}`)

*/
