var AdvancedTypes;
(function (AdvancedTypes) {
    function extend(first, second) {
        let result = {};
        for (let id in first) {
            result[id] = first[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class ConsoleLogger {
        log() {
            // ...
        }
    }
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
})(AdvancedTypes || (AdvancedTypes = {}));
//# sourceMappingURL=10.Advanced Types.js.map