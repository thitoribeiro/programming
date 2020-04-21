/*
Operadores Lógicos
&& -> AND Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR 

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

/*
function falaOI () {
    return 'Oi';
}

let vaiExecutar = 'Thito';

console.log(vaiExecutar && falaOI());
*/

//console.log(0 || false || null || 'Thito Ribeiro' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);