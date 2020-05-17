//if else
var a = 6;
var b = 6;

if (a > b) {
  console.log(a + " é maior que " + b);
} else if (a < b) {
  console.log(a + " é menor que " + b);
} else {
  console.log(a + " é igual a " + b);
}

var dia = 7;

if (dia === 1) {
  console.log("Domingo");
} else if (dia === 2) {
  console.log("Segunda");
} else if (dia === 3) {
  console.log("Terça");
} else if (dia === 4) {
  console.log("Quarta");
} else if (dia === 5) {
  console.log("Quinta");
} else if (dia === 6) {
  console.log("Sexta");
} else if (dia === 7) {
  console.log("Sábado");
} else {
  console.log("Inválido");
}

//switch case
var dia = 3;

switch (dia) {
  case 1:
    r = "Domingo";
    break;
  case 2:
    r = "Segunda";
    break;
  case 3:
    r = "Terça";
    break;
  case 4:
    r = "Quarta";
    break;
  case 5:
    r = "Quinta";
    break;
  case 6:
    r = "Sexta";
    break;
  case 7:
    r = "Sábado";
    break;

  default:
    r = "Inválido";
}

console.log(r);

//operador ternário
a = 8;
b = 7;

var resposta = a > b ? "maior" : a < b ? "menor" : "igual";
console.log(resposta);

var dia = 7
var diaSemana = 
  dia === 1
    ? "Domingo"
    : dia === 2
    ? "Segunda"
    : dia === 3
    ? "Terça"
    : dia === 4
    ? "Quarta"
    : dia === 5
    ? "Quinta"
    : dia === 6
    ? "Sexta"
    : dia === 7
    ? "Sábado"
    : "Inválido";

    console.log(diaSemana);
