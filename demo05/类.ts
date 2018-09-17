/*
     1.类定义了一件事物的抽象特点（属性和方法）
     2.类的实例（对象）通过new生成
     3.封装：将所有操作细节隐藏，只对外暴露接口，外面只能通过接口访问该对象（属性和方法）
     4.继承：子类继承父类，除了拥有父类的一些特性还可以有自己的特性
     5.多态：对于继承同一类的两个实例，他们对于父类的同一方法可以有不同的实现，比如cat,dog继承Animal，他们的eat()方法可以不一样
     6.存取器（getter和setter）
     7.修饰符：public（任何地方被访问） protected（只有继承的子类能访问）,private（不能在声明他的类的外部访问）
     8.抽象类不允许被实例化，他是供其他类继承的基类，他的方法必须在子类中实现
     9.接口：一个可以实现多个接口，不同类之间的共有属性或者方法可以抽象成一个接口
*/
// 1.
class Animal {
    public name;
    public constructor(name) {
        this.name = name
    }
}
let a  = new Animal('狗')
// let a: Animal  = new Animal('狗')

console.log(a.name) //狗
// 因为是public，所以可以可以修改
a.name = '猫'
console.log(a.name) //猫

// 抽象类，不允许被实例，只能被继承
// 定义一个抽象类，定义一个抽象方法
abstract class Animal1 {
    public name
    constructor(name) {
        this.name = name
    }
    public abstract sayHi()
}
// 必须子类实现其抽象方法
class Cat extends Animal1 {
    public sayHi() {
        console.log('hi')
    }
}
//2.
// 接口是一些类共有的属性和方法，我们把它抽象出来，我们要用他时，只要去实现他就可以了，implements
interface IAlert {
    alert()
}
interface IAlert2 {
    alert2()
}
// 我们也可以同时实现多个接口
class Door implements IAlert, IAlert2 {
    alert() {
        console.log('1')
    }
    alert2() {
        console.log('2')   
    }
}
// 接口可以互相继承，接口也可以继承类
interface IAlert3 extends IAlert {
    alert3()
}
// 之前说可以用接口来定义函数
