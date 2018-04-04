namespace IteratorsandGenerators {
    let someArray = [1, "string", false];

    for (let entry of someArray) {
        console.log(entry);
    }

    let list = [4, 5, 6];
    for (let i in list) {
        console.log(i);
    }

    let pets = new Set(["Cat", "Dog", "Hamster"]);
    pets["species"] = "mamals";

    for (let pet in pets) {// in return key
        console.log(pet);
    }

    for (let pet of pets) {//of return value
        console.log(pet);
    }
}