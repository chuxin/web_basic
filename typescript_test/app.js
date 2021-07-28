/**
 * 注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。
 *
 */
var hello = "hello louis";
console.log(hello);
// 类
var site = /** @class */ (function () {
    function site() {
    }
    site.prototype.name = function () {
        console.log("我是一个类");
    };
    return site;
}());
var obj = new site();
obj.name();
/*****    TypeScript 基础类型    ******/
var decLiteral = 6;
console.log("定义数字：", decLiteral);
var name2 = "我是";
var paragrah = "\u5566\u5566\uFF0C " + name2 + " \u8C01\uFF1F \u4F60\u662F " + hello;
console.log("定义字符串：", name2);
console.log(paragrah);
var flag = true;
console.log("定义布尔类型：", flag);
// 在元素类型后面加上[]
var arr = [1, 3];
// 使用数组泛型
var arr2 = [4, 6];
console.log("定义数组方式一：", arr);
console.log("定义数组方式二：", arr2);
var tupleAA;
tupleAA = ["jack", 30];
console.log("定义元祖类型：", tupleAA);
console.log("获取元祖元素：", tupleAA[0]);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
var c2 = Color.red;
console.log(c2 + " " + c);
function hello22() {
    console.log("void 没有返回值");
}
hello22();
var tt11 = 1; // 写法①
var tt22 = 1; // 写法②
console.log("上面两个写法等价，区别是第一种写法可以再赋值其它类型，第二种行(做了 类型推断)：", tt11, tt22);
// tt11 = "333";
// tt22 = "455";
var x = 1;
x = "我是字符串";
x = 111;
console.log("定义任意类型any：", x);
var arrayList = [1, false, 'fine'];
arrayList[1] = 100;
console.log("定义任意类型数组any[]：", arrayList);
var xx;
console.log("不定义值，默认是 undefined：", xx);
var xx2;
console.log(xx2);
var x2;
x = 1;
x = null;
x = undefined;
console.log("定义多个类型|：", x);
console.log("typeof 运算符：", typeof x);
var m;
var n;
// m = (() => { throw new Error("我是错误对象")})();
// n = (() => { throw new Error("我也是错误对象啊")})();
function error11(message) {
    throw new Error(message);
}
// error11("我还是错误，哈哈");
function loop11() {
    while (true) { }
}
// loop11();
var str = "1";
var str2 = str; // 允许变量从一种类型更改为另一种类型
console.log("类型断言（Type Assertion）：", str2);
/*****    变量作用域    ******/
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.val = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
// 以上代码使用 tsc 命令编译为 JavaScript 代码为：
var global_num2 = 12; // 全局变量
var Numbers22 = /** @class */ (function () {
    function Numbers22() {
        this.num_val = 10; // 实例变量
    }
    Numbers22.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers22.sval = 10; // 静态变量
    return Numbers22;
}());
/*****    TypeScript  运算    ******/
var counter = 5;
var i;
var factorial = 1;
for (i = counter; i > 0; i--) {
    factorial *= i;
}
console.log("运算 && for循环：", factorial);
var counter22;
var list22 = "a b c";
console.log("运算 && for...in 循环：");
for (counter22 in list22) {
    console.log(list22[counter22]);
}
// for...of 语句创建一个循环来迭代可迭代的对象。在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。
// for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等
console.log("运算 && for...of 循环：");
var arr22 = [1, "aaa", false];
for (var _i = 0, arr22_1 = arr22; _i < arr22_1.length; _i++) {
    var piece = arr22_1[_i];
    console.log(piece);
}
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () {
        return "Hi there";
    },
    commandLine: 'test'
};
console.log("Customer对象 ", customer.firstName, customer.lastName, customer.sayHi());
var options22 = {
    firstName: "louis",
    lastName: "Hanks",
    sayHi: function () {
        return "Hi there";
    },
    commandLine: ["chu", "xin"]
};
console.log("options22对象 ", options22.firstName, options22.commandLine);
var options33 = {
    firstName: "louis",
    lastName: "Hanks",
    sayHi: function () {
        return "Hi there";
    },
    commandLine: function () { return "I am chuxin"; }
};
console.log("options33对象 ", options33.firstName, options33.commandLine);
var myFunc = options33.commandLine;
console.log("函数值为：", myFunc());
var list2 = ["aa", "bb", "cc"];
console.log("将数组的索引和元素设为不同类型：", list2);
var drummer = {};
drummer.age = 27;
drummer.instrument = "你好啊";
console.log("多接口继承①：", drummer.age, drummer.instrument);
var drummer22 = { age: 30, album: "月亮代表我的心" };
console.log("多接口继承②：", drummer22.age, drummer22.album);