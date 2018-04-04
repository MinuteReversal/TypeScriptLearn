var Interfaces;
(function (Interfaces) {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    function createSquare(config) {
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
    let p1 = { x: 10, y: 20 };
    let mySearch;
    mySearch = function (source, subString) {
        let result = source.search(subString);
        return result > -1;
    };
    let myArray;
    myArray = ["Bob", "Fred"];
    let myStr = myArray[0];
    class Clock {
        setTime(d) {
            throw new Error('Method not implemented.');
        }
        constructor(h, m) { }
    }
    let square = {};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
    function getCounter() {
        let counter = function (start) { };
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
    let btn = new Button();
})(Interfaces || (Interfaces = {}));
//# sourceMappingURL=03.Interfaces.js.map