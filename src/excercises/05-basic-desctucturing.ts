interface Speaker {
    volume: number
    second: number
    song: string
    details: Details
}

interface Details {
    author: string
    year: number
}

const newSpeaker: Speaker = {
    volume: 90,
    second: 36,
    song: 'My song',
    details: {
        author: 'Me',
        year: 2022
    }
}

const { volume, second, song, details } = newSpeaker
const { author, year } = details

console.log('El volumen actual es de: ', volume)
console.log('El segundo actual es de: ', second)
console.log('La canción actual es: ', song)
console.log('El autor actual es: ', author)
console.log('El año actual es: ', year)

const Characters: string[] = ['Goku', 'Gohan', 'Trunks', 'Vegeta']

const [goku, gohan, trunks, last] = Characters

console.log('Personaje 1: ', goku)
console.log('Personaje 2: ', gohan)
console.log('Personaje 3: ', trunks)
console.log('Personaje 4: ', last)