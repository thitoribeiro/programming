const nome = 'Thito Rodrigo';
const sobrenome = 'Ribeiro';
const idade = 32;
const peso = 70;
const alturaEmM = 1.75;
let imc;
let anoNascimento;

imc = peso/(alturaEmM * alturaEmM);
anoNascimento = 2020 - idade;

//console.log(nome, sobrenome,'tem', 30, 'anos, pesa', peso, 'kg, tem', alturaEmM, 'de altura, seu IMC é de', imc, 'e nasceu em', anoNascimento,'.');

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);



