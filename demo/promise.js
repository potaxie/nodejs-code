//创建promise对象

// 把异步读取文件的过程，封装程一个promise
let readFilePromise = new Promise(function (resolve/*成功时调用*/,reject/*失败时调用*/){
    fs.readFile('./1.txt','utf-8',function(err,data){
        if(err){
            reject(err)
        }
        resolve(data)
    })
})

//第一次改写，使用then方式调用
readFilePromise().then(res =>{
    console.log("data:",data) //成功时
}).catch(err =>{
    console.log(err) //失败时
})


//promise改写异步调用
