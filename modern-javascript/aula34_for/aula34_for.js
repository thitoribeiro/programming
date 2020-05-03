//bloco do "for" não tem ";" no final
/*for (let i = 0; i <= 5; i ++) {    
    console.log(`Linha ${i}`);     
}

for (let i = 5; i >= 1; i --) {    
    console.log(`Linha ${i}`);     
}

for (let i = 0; i <= 10; i ++) {  
    const par = i % 2 === 0;  
    console.log(i, par);     
}
*/

const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}
 