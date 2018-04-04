var BasicTypes;
(function (BasicTypes) {
    //Boolean
    let isDone = false;
    //Number
    let decimal = 6;
    let hex = 0xf00d;
    let binary = 0b1010;
    let octal = 0o744;
    //String
    let color = "blue";
    let fullName = `Bob Bobbington`;
    let age = 37;
    let sentence = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;
    //Array
    let list1 = [1, 2, 3];
    let list2 = [1, 2, 3];
    //Tuple
    // Declare a tuple type
    let x;
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    //x = [10, "hello"]; // Error
    //Enum
    let Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    ;
    let c = Color.Green;
    //Any
    let notSure = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean
    let list = [1, true, "free"];
    list[1] = 100;
    //Void
    function warnUser() {
        alert("This is my warning message");
    }
    let unusable = undefined;
    //Null and Undefined
    // Not much else we can assign to these variables!
    let u = undefined;
    let n = null;
    //Never
    // Function returning never must have unreachable end point
    function error(message) {
        throw new Error(message);
    }
    // Inferred return type is never
    function fail() {
        return error("Something failed");
    }
    // Function returning never must have unreachable end point
    function infiniteLoop() {
        while (true) {
        }
    }
    //Type assertions
    let someValue1 = "this is a string";
    let strLength1 = someValue1.length;
    let someValue = "this is a string";
    let strLength = someValue.length;
})(BasicTypes || (BasicTypes = {}));
//# sourceMappingURL=01.Basic Types.js.map