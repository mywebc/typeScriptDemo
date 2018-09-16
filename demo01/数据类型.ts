/*
    基本数据类型
    boolean, number, string, null, undefined, void
*/
let isDone: boolean = false
let myName: string = 'Tom'
let myAge: number = 20
let myInformation = `我叫${myName},我的年龄是${myAge}`

console.log(myInformation)
// typeScript中有空值的概念 void, 如果声明这个变量为空值，
// 那么只能为它赋值为null undfined
let u: void = null
//  let u: void = undefined

// null undfined为任何类型的子类型，可以赋值给任何类型
 let a: number = null
 let b: number = undefined
 let c: string = null
 let d: boolean = null
 // void 就不行
//  let e: boolean = void 

/*
    也可以任意类型 any
    如果在声明时未指定类型，即为默认类型
*/
let xixi: any = '7'

/*
（1）如果你只是定义变量，并没有赋值，自动设为any
(2)如果你在定义时赋值了，ts会推断你的类型
*/
// 这是可以的，类型为any
let font
font = '1'
font = 2
// ts 会默认推断end是string，所以number赋值时就会报错
let end = '11'
// end = 11

/* 
    联合类型
*/
let haha: string | number    
