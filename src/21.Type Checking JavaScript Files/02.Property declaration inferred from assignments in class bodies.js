// @ts-check
class C {
    constructor() {
        /** @type {number|undefined} */
        this.prop = undefined;
    }
}
let c = new C();
c.prop = 0;
c.prop = "string";