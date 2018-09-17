// 数组里面的类型都是一样的
// 元组里面可以包含不同类型
// 我们在初始化时，必须先指定其类型
let yuanzu: [string, number]
// 如果我们给他添加元素时，默认为联合类型
yuanzu.push('haha')