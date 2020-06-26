class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    say() {
        console.log('大家好，我是：${this.name}年龄:${this.age}')
    }
}
let p1 = new Person('xiaohui',45)
p1.say()

class xiaodi extends Person{

    //需要限构造父类

    constructor(name,age) {
        super(name,age)

        this.name=name
        this.age=age
    }

    say(){
        console.log("renhenhuayouduo")
    }


}

let X1 =new xiaodi("xiaowang",26)
X1.say()