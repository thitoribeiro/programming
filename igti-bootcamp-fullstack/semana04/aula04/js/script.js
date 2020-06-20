class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} falando...`);
    }
}

const animal = new Animal('Totó');
animal.speak();