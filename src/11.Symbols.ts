namespace mySymbol {
    const symbol1 = Symbol();
    const symbol2 = Symbol(42);
    const symbol3 = Symbol('foo');

    console.log(typeof symbol1);
    // expected output: "symbol"

    console.log(symbol3.toString());
    // expected output: "Symbol(foo)"

    console.log(Symbol('foo') === Symbol('foo'));


    const getClassNameSymbol = Symbol();

    class C {
        [getClassNameSymbol]() {
            return "C";
        }
    }

    let c = new C();
    let className = c[getClassNameSymbol]();
}
