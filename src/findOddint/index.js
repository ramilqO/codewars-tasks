function findOdd(A) {
    const obj = A.reduce((acc, n) => {
        acc[n] ? acc[n]++ : acc[n] = 1;
        return acc;
    }, {});

    return +Object.entries(obj).find(item => item[1] % 2 !== 0)[0];
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // should return 4, because it appears 1 time (which is odd).
