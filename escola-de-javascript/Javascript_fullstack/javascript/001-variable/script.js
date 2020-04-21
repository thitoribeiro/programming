alert("Bem vindo! A seguir pediremos que informe alguns dados.");

let name = prompt("Qual seu nome?");

let age = prompt("Informe sua idade");

let ageConfirmation = confirm(`Sua idade é ${age} anos?`);

alert(`Nome: ${name}`);
alert(`Idade: ${age}`);
alert(`Idade confirmada: ${ageConfirmation}`);