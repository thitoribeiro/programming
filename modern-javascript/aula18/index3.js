const pessoa1 = {
  nome: 'Thito',
  sobrenome: 'Ribeiro',
  idade: 32,

  fala() {
    console.log(`${this.nome} ${this.nome} está falando oi...`)
  },

  incrementaIdade() {
      ++this.idade;
  }
  
};

pessoa1.fala();