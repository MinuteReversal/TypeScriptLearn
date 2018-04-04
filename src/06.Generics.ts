//http://www.typescriptlang.org/docs/handbook/generics.html
namespace Generics {
    //Hello World of Generics
    function identity<T>(arg: T): T {
        return arg;
    }

    identity<number>(123);
    identity("4124");

    //Working with Generic Type Variables
    function loggingIdentitiy<T>(arg: T[]): T[] {
        console.log(arg.length);
        return arg;
    }
    loggingIdentitiy([1, 2]);



    function needArray<T>(arg: Array<T>): Array<T> {
        console.log(arg.length);
        return arg;
    }
    needArray([1, 2]);

    //Generic Types
    function hello<T>(arg: T): T {
        return arg;
    }
    let myHello: <U>(arg: U) => U = hello;


    function hello2<T>(arg: T): T {
        return arg;
    }
    let myHello2: { <U>(arg: U): U } = hello;

    //Generic Classes
    class GenericNumber<T>{
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = (x, y) => { return x + y; };

    //Generic Constraints
    interface Lengthwise {
        length: number;
    }

    function test<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    }
    test({ length: 10 });

    //Using Type Parameters in Generic Constraints
    function getProperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, "a");

    //Using Class Types in Generics
    function create<T>(c: { new (): T; }): T {
        return new c();
    }
}