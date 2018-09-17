// 使用第三方库
// 我们一般新建一个声明文件，以jquery为例，新建jQuery.d.ts 使用declare 关键字
declare var jQuery: (selector: string) => any;
// 在其他文件中这样使用 ，三斜线指令
/// <reference path="./jQuery.d.ts" />

// 不过现在一般第三方都会提供.d.ts声明文件 我们只要下载@types/开头即可