interface SuperHero {
    name: string
    age: number
    direction: Direction
    getAddress: () => string
}

interface Direction {
    street: string
    country: string
    city: string
}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30,
    direction: {
        street: 'Maint ST',
        country: 'USA',
        city: 'New York'
    },
    getAddress() {
        return this.name + ', ' + this.direction.city + ', ' + this.direction.country
    }
}

const dir = superHero.getAddress()
console.log(dir)