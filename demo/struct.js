//对数组进行解析
 let arr1=[0,1,2,3,4,5]
console.log("arr1[0]",arr1[0])


let [a,b,c,d] = arr1
console.log(a,b,c,d)


//对象进行结构
const person = {
    name: "Lily",
    age: "18",
    address: "深圳"
}

//如果想自动推导一个要写成同名，否则要自己指定
let {name,age,address} =person

console.log(name,age,address)

//当对象作为函数参数时，也可以解析构造

const person1 ={name:"小明",age:11}

function  printPerson({name,age}) {//函数参数可以解构一个对象
    console.log('姓名：${name} 年龄：${age}');

}

printPerson(person1)


