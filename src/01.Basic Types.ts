namespace BasicTypes {
//Boolean
    let isDone: boolean = false;

    //Number
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

    //String
    let color: string = "blue";
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.
I'll be ${ age + 1} years old next month.`

    //Array
    let list1: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];

    //Tuple
    // Declare a tuple type
    let x: [string, number];
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    //x = [10, "hello"]; // Error

    //Enum
    enum Color { Red = 1, Green, Blue };
    let c: Color = Color.Green;

    //Any
    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean
    let list: any[] = [1, true, "free"];
    list[1] = 100;

    //Void
    function warnUser(): void {
        alert("This is my warning message");
    }
    let unusable: void = undefined;

    //Null and Undefined
    // Not much else we can assign to these variables!
    let u: undefined = undefined;
    let n: null = null;

    //Never
    // Function returning never must have unreachable end point
    function error(message: string): never {
        throw new Error(message);
    }

    // Inferred return type is never
    function fail() {
        return error("Something failed");
    }

    // Function returning never must have unreachable end point
    function infiniteLoop(): never {
        while (true) {
        }
    }

    //Type assertions
    let someValue1: any = "this is a string";

    let strLength1: number = (<string>someValue1).length;

    let someValue: any = "this is a string";

    let strLength: number = (someValue as string).length;
}