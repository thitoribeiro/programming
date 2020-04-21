function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Thito', 'Ribeiro', 32);
const pessoa2 = criaPessoa('Silvia', 'Marchetti', 31);
const pessoa3 = criaPessoa('Sophia', 'Ribeiro', 05);
const pessoa4 = criaPessoa('Miriam', 'Monteiro', 55);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome);