//箭头函数

function Add(a, b) {

    return a + b

}


let c = Add(1, 2)

console.log('c:', c)


let add1 = (a, b) => {
    return a + b
}


let add2 = (a, b) => a + b

console.log('d:', add2(1, 2))