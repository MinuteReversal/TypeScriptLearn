var Functions;
(function (Functions) {
    // Named function
    function add(x, y) {
        return x + y;
    }
    // Anonymous function
    let myAdd = function (x, y) { return x + y; };
    //Inferring the types
    let mySub = function (x, y) { return x - y; };
    //this parameters
    function f() {
        //this is unusable in here
    }
    //Overloads
    function pickCard(x) {
        if (typeof x == "object") {
            return Math.floor(Math.random() * x.length);
        }
        else if (typeof x == "number") {
            return "clubs";
        }
    }
    //Arrow function
    var fn = () => { return "hello"; };
})(Functions || (Functions = {}));
//# sourceMappingURL=05.Functions.js.map