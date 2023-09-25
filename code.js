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

/*
2)
Invariant: The nth element of fibNums will always be the sum
of the n - 1 and the n - 2 elements for any n bigger than 2.
I say for any n bigger than 2 because when n is 0 or 1 then 
there is not a n - 1 or n - 2 term to add, the fibonacci value 
if these numbers is themselves. 
*/