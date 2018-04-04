/// <reference path="Car.Door.ts" />
/// <reference path="Car.Wheel.ts" />
var Garage;
(function (Garage) {
    class Car {
        constructor(color) {
            this.color = color;
            this.doors = [new Garage.Door("front"), new Garage.Door("front")];
            this.wheels = [new Garage.Wheel(15), new Garage.Wheel(15), new Garage.Wheel(15), new Garage.Wheel(15)];
        }
        isPlural(count) {
            return count ? "s" : "";
        }
        dirve() {
            var me = this;
            console.log(`${me.color} car are drving that has ${me.doors.length} door${me.isPlural(me.doors.length)} and ${me.wheels.length} wheel${this.isPlural(me.wheels.length)}`);
        }
    }
    Garage.Car = Car;
})(Garage || (Garage = {}));
//# sourceMappingURL=Car.Car.js.map