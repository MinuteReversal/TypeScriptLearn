/// <reference path="Car.Door.ts" />
/// <reference path="Car.Wheel.ts" />

namespace Garage {
    export class Car {
        color: string
        doors: Array<Door>
        wheels: Array<Wheel>
        constructor(color: string) {
            this.doors = [new Door("front"), new Door("front")];
            this.wheels = [new Wheel(15), new Wheel(15), new Wheel(15), new Wheel(15)];
        }
        isPlural(count: number): string {
            return count ? "" : "s";
        }
        dirve() {
            var me = this;
            console.log(`${me.color} car are drving that has ${me.doors.length} door${me.isPlural(me.doors.length)} and ${me.wheels.length} wheel${this.isPlural(me.wheels.length)}`);
        }
    }
}