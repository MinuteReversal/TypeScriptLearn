namespace Functions {
    // Named function
    function add(x, y) {
        return x + y;
    }

    // Anonymous function
    let myAdd = function (x, y) { return x + y; };

    //Inferring the types
    let mySub = function (x: number, y: number): number { return x - y; };

    //this parameters
    function f(this: void) {
        //this is unusable in here
    }

    //Overloads
    function pickCard(x): any {
        if (typeof x == "object") {
            return Math.floor(Math.random() * x.length);
        }
        else if (typeof x == "number") {
            return "clubs";
        }
    }

    //Arrow function
    var fn = () => { return "hello" };
}