const empty = [...Array(100)];
const fizzbuzz = empty.map(
    (element: undefined, index: number): string | number => {
        if ((index + 1) % 3 === 0 && (index + 1) % 5 === 0) {
            return "FizzBuzz";
        }
        if ((index + 1) % 3 === 0) {
            return "Fizz";
        }
        if ((index + 1) % 5 === 0) {
            return "Buzz";
        }
        return index + 1;
    }
);
console.log(fizzbuzz.join("\n"));
