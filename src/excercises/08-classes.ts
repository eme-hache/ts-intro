class Person {
    constructor(
        public name: string,
        public age: number
    ) {}
}

class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, age);
    }
}

const Spiderman = new Hero('Spiderman', 45, 'Peter Parker');

console.log(Spiderman)