import { IProduct, computeTax } from '../excercises/06-param-destructuring'

const cart: IProduct[] = [
    {
        desc: 'Samsung Galaxy S10',
        price: 1000
    },
    {
        desc: 'iPad Air',
        price: 1500
    }
]

const [total, tax] = computeTax(cart)

console.log('Total: ', total)
console.log('Tax: ', tax)