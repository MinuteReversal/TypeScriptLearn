var Classes;
(function (Classes) {
    //Classes
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        great() {
            return "Hello, " + this.greeting;
        }
    }
    let greeter = new Greeter("world");
    //Inheritance Public, private, and protected modifiers
    class Animal {
        constructor(theName) { this.name = theName; }
        move(distanceInMeters = 0) {
            console.log(`${this.name} moved ${distanceInMeters}`);
        }
    }
    class Snake extends Animal {
        constructor(name) { super(name); }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }
    class Horse extends Animal {
        constructor(name) { super(name); }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }
    let sam = new Snake("Sammy the Python");
    let tom = new Horse("Tommy the palomino");
    sam.move();
    tom.move();
    //Accessors
    let passcode = "secret passcode";
    class Employee {
        get fullName() {
            return this._fullName;
        }
        set fullName(newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }
    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
    //Static Properties
    class Grid {
        constructor(scale) {
            this.scale = scale;
        }
        calculateDistanceFromOrigin(point) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.x - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
    }
    Grid.origin = { x: 0, y: 0 };
    let grid1 = new Grid(1.0);
    let grid2 = new Grid(5.0);
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    //Abstract Classes
    class Department {
        constructor(name) {
            this.name = name;
        }
        printName() {
            console.log("Department name:" + this.name);
        }
    }
    class AccountingDepartment extends Department {
        constructor() {
            super("Accounting and auditing");
        }
        printMeeting() {
            console.log("The Accounting Department meets each Monday at 10am.");
        }
        generateReports() {
            console.log("Generating accounting reports...");
        }
    }
    let department;
    department = new AccountingDepartment();
    department.printName();
    department.printMeeting();
})(Classes || (Classes = {}));
//# sourceMappingURL=04.Classes.js.map