// 类型断言，手动指定一个值的类型
// 为什么要这么做
// 当ts不确定时，他会找到所有不确定值的属性和方法
/*
    <类型>值
    值 as 类型 （在react中必须这么用）    
*/
// function getLength(something: string | number): number {
//     return something.length;
// }
// function getLength(something: string | number): number {
//     if (something.length) {
//         return something.length;
//     } else {
//         return something.toString().length;
//     }
// }
// 获取length时会报错
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
// 我们不能类型推断一个没有的值（联合类型不存在的值）