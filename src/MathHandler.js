class MathHandler {
    constructor() {}

    isEven(number) {
        return number % 2 == 0;
    }

    isOdd(number) {
        return number % 2 != 0;
    }

    getDouble(number) {
        return number * 2;
    }
}

export default MathHandler;
