// var = // Variáveis declaradas com var têm escopo de função. Isso significa que são variáveis em toda a função, independente de onde são declaradas.//

// let = // Variáveis declaradas com let são acessíveis apenas dentro do bloco em que foram definidas.//

// const = // Const é usado para declarar variáveis cujo valor não deve ser reatribuido após a inicialização.//

const dados = {
  nome: "João",
  idade: 25,
  cidade: "exemploville"
}

console.log("nome:", dados.nome);
console.log("idade:", dados.idade);
console.log("cidade", dados.cidade);


let dicionario = {
  nome : "Lucas",
  idade : 24,
  cidade : "Blumenau"
};

console.log("nome:", dicionario.nome);
console.log("idade:", dicionario.idade);
console.log("cidade:", dicionario.cidade);
