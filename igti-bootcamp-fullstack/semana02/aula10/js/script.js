'use strict';

//var x let

//var tem escopo abrangente
//let tem escopo reduzido

//var
function withVar() {
  for (var i = 0; i < 10; i ++) {
    console.log('var ' + i);
  }

  i = 20;
  console.log(i);
}

withVar();

//let
function withLet() {
    for (let i = 0; i < 10; i ++) {
      console.log('let ' + i);
    }
  
    //i = 20;
    //console.log(i);
  }
  
  withLet(); //O let não é acessado fora do escopo da função onde foi definido.

  //const - não podemos reatribuir valores. 

  //const c = 10;
  //c = 20;

  const d = [];
  console.log(d);

  d.push(1);
  console.log(d);
  //d = 1;

//function
//funcao
function sum(a, b) {
  return a + b;
}
//funcao anonima
const sum2 = function(a, b) {
  return a + b;
};

//arrow function
const sum3 = (a, b) => {
  return a + b;
};

//arrow function reduzida
const sum4 = (a, b) => a + b;

console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));

//template literals

const nome = 'Thito';
const segundoNome = 'Rodrigo';
const sobreNome = 'Ribeiro';
const text1 = 'Meu nome é ' + nome + ' ' + segundoNome + ' ' + sobreNome;
const text2 = `Meu nome é ${nome} ${segundoNome} ${sobreNome}`;

console.log(text1);
console.log(text2);

//default parameters

const sum5 = (a = 10, b = 10) => a + b;
console.log(sum5(2));
console.log(sum5(2, 8));


