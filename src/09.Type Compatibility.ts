//Type Compatibility
namespace TypeCompatibility {
    namespace test1 {
        interface Named {
            name: string;
        }

        class Person {
            name: string;
        }

        let p: Named;
        p = new Person();
    }

    namespace Startingout {
        interface Named {
            name: string;
        }

        let x: Named;
        // y's inferred type is { name: string; location: string; }
        let y = { name: "Alice", location: "Seattle" };
        x = y;

        function greet(n: Named) {
            alert("Hello, " + n.name);
        }
        greet(y); // OK
    }

    namespace Comparingtwofunctions {
        let x = (a: number) => 0;
        let y = (b: number, s: string) => 0;

        y = x; // OK
    }
}