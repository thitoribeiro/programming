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

