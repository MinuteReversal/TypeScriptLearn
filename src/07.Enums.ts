namespace Enums {
    //Enums
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    enum FileAccess {
        None,
        Read = 1 << 1,
        Write = 1 << 2,
        ReadWrite = Read | Write,
        G = "123".length
    }

    const enum Enum {
        A = 1,
        B = A * 2
    }

    //Ambient enums
    declare enum Enum2 {
        A = 1,
        B,
        C = 2
    }
}