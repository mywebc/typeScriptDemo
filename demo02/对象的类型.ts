// 对象的类型用interfaces(接口)来定义 一般大写
interface Person {
    name: string,
    age: number
}
//我们定义a对象时，可以用接口Person 必须和接口里面定义的类型完全一致
let a: Person = {
    name: 'tom',
    age: 12
}
interface Student {
    name: string,
    age?: number
}
// 让接口属性可选 age?:number
let b: Student = {
    name: 'tom'
}
// 也可以有一个任意属性
// [propName: string]：any
// 如果定义了任意属性，那么其他确定属性和可选属性必须是他的子属性
// 也就是说 任意属性为string，那么子属性必须都为string

// 只读属性
interface Student1 {
    readonly id: number
}
let c: Student1 = {
    id: 123
}
// c.id = 1234