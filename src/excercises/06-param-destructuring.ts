export interface IProduct {
    desc: string
    price: number
}

const cellphone: IProduct = {
    desc: 'Samsung Galaxy S10',
    price: 1000
}

const tablet: IProduct = {
    desc: 'iPad Air',
    price: 1500
}

export function computeTax(products: IProduct[]): [number, number] {
    let total = 0

    products.forEach(({ price }) => {
      total += price
    })

    return [total, total * 0.15]
}

const products = [cellphone, tablet]

const [total, tax] = computeTax(products)
