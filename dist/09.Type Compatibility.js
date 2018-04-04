//Type Compatibility
var TypeCompatibility;
(function (TypeCompatibility) {
    let test1;
    (function (test1) {
        class Person {
        }
        let p;
        p = new Person();
    })(test1 || (test1 = {}));
    let Startingout;
    (function (Startingout) {
        let x;
        // y's inferred type is { name: string; location: string; }
        let y = { name: "Alice", location: "Seattle" };
        x = y;
        function greet(n) {
            alert("Hello, " + n.name);
        }
        greet(y); // OK
    })(Startingout || (Startingout = {}));
    let Comparingtwofunctions;
    (function (Comparingtwofunctions) {
        let x = (a) => 0;
        let y = (b, s) => 0;
        y = x; // OK
    })(Comparingtwofunctions || (Comparingtwofunctions = {}));
})(TypeCompatibility || (TypeCompatibility = {}));
//# sourceMappingURL=09.Type Compatibility.js.map