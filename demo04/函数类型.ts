// 函数有输入和输出，都要考虑到
// 1.函数声明
function sum(x: number, y: number): number {
    return x + y
}
// 2.函数表达式
// 这其实只是赋值操作，我们左边也要定义
let sum1 = function(x: number, y: number): number {
    return x + y
}
// 这是正宗的 => 表示函数的定义，与箭头函数不一样
let sum2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
}
// 3.用接口形式定义
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
// 4.函数我们可以用可选参数，必须放在必选参数后面
// x?: string
// 5.函数的默认值
function sum4 (x: number, y: number = 1) {
    return x + y
}
// 6 ...rest
// function push(array, ...items) {
//     items.forEach(function(item) {
//         array.push(item);
//     });
// }
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
// 7. 重载 为了更精确的类型监查，将精确定义写在最前面
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
