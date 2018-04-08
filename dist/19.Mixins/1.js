class Disposable {
    dispose() {
        this.isDisposed = true;
    }
}
class Activatable {
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
class SmartObject {
    constructor() {
        this.isActive = false;
        this.isDisposed = false;
        setInterval(() => console.log(`${this.isActive}:${this.isDisposed}`), 500);
    }
    interact() {
        this.activate();
    }
}
let applyMixins = (derivedCtor, baseCtors) => {
    baseCtors.forEach(baseCtors => {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
};
applyMixins(SmartObject, [Disposable, Activatable]);
let smartObject = new SmartObject();
setTimeout(() => {
    smartObject.interact();
}, (1000));
//# sourceMappingURL=1.js.map