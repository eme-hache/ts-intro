function add(a: number, b: number): number {
    return a + b;
}

const addArrow = (a: number, b: number): number => a + b;

function multiply(a: number, b?: number, base: number = 2): number {
    return a * base
}

interface Character {
    name: string;
    health: number;
    showHealth?: () => void;
}

function heal(character: Character, healX: number): void {
    character.health += healX
}

const newCharacter: Character = {
    name: 'John',
    health: 50,
    showHealth() {
        console.log('Health: ' + this.health)
    }
}

heal(newCharacter, 10)
newCharacter.showHealth()