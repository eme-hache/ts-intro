let skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Person4 {
    name: string;
    hp: number;
    skills: string[];
    from?: string;
}

const person: Person4 = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

person.from = 'Earth';

console.table(person)