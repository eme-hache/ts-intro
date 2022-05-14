function whatTypeAmI<T>(arg: T) {
    return arg
}

let imString = whatTypeAmI('I am a string')
let imNumber = whatTypeAmI(1)
let imBoolean = whatTypeAmI(true)
let explicit = whatTypeAmI<string>('I am a string')