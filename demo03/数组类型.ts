// 最常见的定义方法 类型+[] 这个类型我们一般用any
let myArr: number[] = [1,,2,4,5,]
// 常见用法用any
let myArr1: any[] = ['1',2,{name: 'myPleasure'}]

// 使用泛型定义
let myArr2: Array<number> = [1,2,3,4,5]

// 用接口表示数组
interface NumberArr {
    [index: number]: number
}
let myArr3: NumberArr = [1,3,4,5]
// 如果想定义类数组，就是伪数组,在typescript中已经有自己的接口定义
// IArguments,NodeList,HtmlCollection
function abc () {
    // args 是伪数组
    let args: IArguments = arguments
    console.log(args)
}
abc()