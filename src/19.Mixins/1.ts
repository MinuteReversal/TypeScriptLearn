class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}

class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(() => console.log(`${this.isActive}:${this.isDisposed}`), 500);
    }
    interact() {
        this.activate();
    }
    isActive: boolean = false;
    activate: () => void
    deactivate: () => void
    isDisposed: boolean = false;
    dispose: () => void
}

let applyMixins = (derivedCtor: any, baseCtors: any[]) => {
    baseCtors.forEach(baseCtors => {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}

applyMixins(SmartObject, [Disposable, Activatable]);
let smartObject = new SmartObject();
setTimeout(() => {
    smartObject.interact()
}, (1000));