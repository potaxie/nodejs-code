//node内置的读取文件的模块

let fs = require('fs')


let filename = '1.txt'

//先测试同步读取文件

let data = fs.readFileSync(filename, 'utf-8')
console.log('同步读取文件内容data：', data.toString())
/**
 * 同步执行：
 * 同步读取文件是，无需回调函数，返回值就是读取的数据内容
 * 主线程阻塞在读取函数
 * 慢，效率低
 */



//测试异步读取文件
fs.readFile(filename,'utf-8',/*回调函数*/function(err,data){
    if(err){
        console.log('读取文件出错',err)
    }
    console.log('异步读取文件数据：',data)
})

/**
 * 异步读取：
 * 需要注册一个毁掉函数
 * 主线长发现异步调用时，直接把任务丢给后台线程，主线程继续向下执行代码
 * 当后台执行完成时，会通知通过回调函数通知主线程，主线程执行
 */

console.log('异步读取文件数据222')
