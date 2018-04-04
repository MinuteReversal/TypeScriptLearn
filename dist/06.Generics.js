//http://www.typescriptlang.org/docs/handbook/generics.html
var Generics;
(function (Generics) {
    //Hello World of Generics
    function identity(arg) {
        return arg;
    }
    identity(123);
    identity("4124");
    //Working with Generic Type Variables
    function loggingIdentitiy(arg) {
        console.log(arg.length);
        return arg;
    }
    loggingIdentitiy([1, 2]);
    function needArray(arg) {
        console.log(arg.length);
        return arg;
    }
    needArray([1, 2]);
    //Generic Types
    function hello(arg) {
        return arg;
    }
    let myHello = hello;
    function hello2(arg) {
        return arg;
    }
    let myHello2 = hello;
    //Generic Classes
    class GenericNumber {
    }
    let myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = (x, y) => { return x + y; };
    function test(arg) {
        console.log(arg.length);
        return arg;
    }
    test({ length: 10 });
    //Using Type Parameters in Generic Constraints
    function getProperty(obj, key) {
        return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, "a");
    //Using Class Types in Generics
    function create(c) {
        return new c();
    }
})(Generics || (Generics = {}));
//# sourceMappingURL=06.Generics.js.map