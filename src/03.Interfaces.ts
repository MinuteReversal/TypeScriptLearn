namespace Interfaces {
    //Our First Interface
    interface LabelledValue {
        label: string;
    }

    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);

    //Optional Properties
    interface SquareCoinfg {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareCoinfg): { color: string; area: number } {
        let newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    let mySquare = createSquare({ color: "black" });
    //Readonly properties
    interface Point {
        readonly x: number;
        readonly y: number;
    }

    let p1: Point = { x: 10, y: 20 };

    //Function Types
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function (source: string, subString: string) {
        let result = source.search(subString);
        return result > -1;
    }

    //Indexable Types
    interface StringArray {
        [index: number]: string;
    }
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];

    //Class Types
    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }

    class Clock implements ClockInterface {
        setTime(d: Date) {
            throw new Error('Method not implemented.');
        }

        currentTime: Date;
        constructor(h: number, m: number) { }
    }

    //Extending Interfaces
    interface Shape {
        color: string;
    }

    interface PenStroke {
        penWidth: number;
    }

    interface Square extends Shape, PenStroke {
        sideLength: number;
    }

    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;

    //Hybrid Types
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }

    function getCounter(): Counter {
        let counter = <Counter>function (start: number) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }

    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;

    //Interfaces Extending Classes
    class Control {
        private state: any;
    }
    interface SelectableControl extends Control {
        select(): void;
    }
    class Button extends Control {
        select() { }
    }
    class TextBox extends Control {
        select() { }
    }
    class Image {
        select() { }
    }
    class Location {
        select() { }
    }

    let btn: Button = new Button();
}