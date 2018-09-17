// 枚举使用enum关键字来定义
enum days { Sun, Mon, Wen }
// 可以手动赋值,后续的为自动赋值的，会自动增长为1
enum month { Mon=1,Tun }// Tun 被自动赋值，自增为1
// 上面是常数项，还有一种类型是计算所得项
// 常数枚举用const enum, 他会在编译阶段被删除，并且不包含计算成员
const enum Directions {
    Up,
    Down
}
// 外部枚举 declare enum declare定义的类型会在编译时检查，编译结果中删除
declare enum Directions1 {
    Up,
    Down
}
let directions = [Directions.Up, Directions.Down]