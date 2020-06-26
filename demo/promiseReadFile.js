let fs = require('fs')


let checkStat1 = () => {
    fs.readFile('./1.txt', 'utf-8', function (err, data) {
        console.log('读取文件', data)

        fs.writeFile('./2.txt', 'utf-8', function (err) {
            if (err) {
                return
            }

            console.log('写文件成功!')


        })
    })
}


checkStat1() //多次往里面缩进


//解决办法：把每一个异步函数都封装陈一个promise

let readFilePromise = () => {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile('./1.txt', 'utf-8', function (err, data) {
                console.log('读取文件', data)
                resolve(data)
            })
        } catch (e) {
            reject(e)
        }

    })
}


let writeFilePromise = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./1.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err)
            }
            resolve('写入成功')
        })
    })
}





let statPromise =() =>{
    return new Promise((resolve,reject) => {
        fs.stat('./2.txt', function (err, stat) {
            if (err) {
                return
            }
            console.log('文件状态', stat) //此时已经缩进了三层
            return stat
        })
    })

}


//如果想async、await、promis
//调用函数的外面修饰为async
//promise 函数签名加上await
let checkStat2 = async () => {
    let data = await readFilePromise()
    let res = await writeFilePromise(data)
    let stat = await statPromise()
}



