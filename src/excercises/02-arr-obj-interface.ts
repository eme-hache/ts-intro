let skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Heroe {
    name: string;
    hp: number;
    skills: string[];
    from?: string;
}

const person: Heroe = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

person.from = 'Earth';

console.table(person)