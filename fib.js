function fib(number) {
    if (number < 2) {
        return number;
    } else {
        return fib(number - 2) + fib(number - 1);
    }
}

const result = fib(5);
console.log(result);