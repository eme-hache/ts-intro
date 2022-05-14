interface IPassenger {
    name: string
    children?: string[]
}

const passenger: IPassenger = {
    name: 'Fernando'
}

const passenger2: IPassenger = {
    name: 'Melissa',
    children: ['Fernando', 'Miguel']
}

function printChildren(passenger: IPassenger): void {
    const howManyChildren = passenger.children?.length || 0

    console.log(howManyChildren)
}

printChildren(passenger)