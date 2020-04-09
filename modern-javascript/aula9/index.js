//let vs var

//Com o var é possível redeclarar uma variável já declarada anteriormente
var nome = 'Thito';
var nome = 'Ribeiro';
console.log(nome);

numero = 2;
numero = 3;
console.log(numero);

//Com o let não é possível redeclarar uma variável
//É apresentado mensagem de erro "SyntaxError: Identifier 'nome' has already been declared"
let nome = 'Thito';
let nome = 'Rodrigo';

console.log(nome);
