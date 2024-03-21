// EX2

// Fazer um levantamento de dados
// trazer soma de salários de 5 usuários
// os usuários devem ter:
// nome
// sobrenome
// idade
// CPF
// Conta Salarial
// Fazer a soma dos salários
// Depois fazer a divisão por 5

// Depois fazer uma saudação
//Ex: seu nome é lucas... sua idade... seu cpf... sua conta...


var nome = "Ricardo, Mateus, lucas, xico e mateus";
console.log(nome);
var sobrenome = "de Oliveira, Santos, Domingos, teixeira e nunes";
console.log(sobrenome);
var idade = "28, 18, 19, 22 e 39";
console.log(idade);
var conta_salarial = "23, 57, 38, 63, 45";
console.log(conta_salarial);
var banco = "Banco Bradesco.";
console.log(banco);

var n1 = 700;
var n2 = 800;
var n3 = 900;
var n4 = 1000;
var n5 = 2000;
var soma = n1 + n2 + n3 + n4 + n5;
console.log(soma);

var divisao = soma / 5;
console.log(divisao);

var mensagem = "Eu e meus colegas nos chamamos " + nome + " seus sobrenomes são " + sobrenome + " nossas idades são " + idade + " e suas conta salarial são " + conta_salarial + " as somas de seus salários é " + soma + " que dividido fica " + divisao + " como todos trabalhamos na mesma empresa, todos temos conta salário no banco " + banco;
console.log(mensagem);

