function map<Type>(arr: Array<Type>, fn: (el: Type) => Type ) {
    
    const mappedArray: Array<Type> = []

    arr.forEach((el) => {
        mappedArray.push(fn(el))
    })

    return mappedArray
}

export default map