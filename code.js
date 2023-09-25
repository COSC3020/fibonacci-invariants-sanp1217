function fib(n) {
    if (n == 0) {
        return [0];
    } else if (n == 1) {
        return [0, 1];
    } else {
        let fibNums = fib(n - 1);
        fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
        return fibNums;
    }
}
