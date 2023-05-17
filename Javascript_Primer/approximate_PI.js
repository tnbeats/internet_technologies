function approxPi(n) {
    let insideCircle = 0;

    for(let i = 0; i < n; i++) {
        let x = Math.random();
        let y = Math.random();
        let distance = Math.sqrt(x * x + y * y);
        if(distance <= 1) {
            insideCircle++;
        }
    }

    return 4 * (insideCircle / n);
}
console.log("Approximation with 100 points: ", approxPi(100));
console.log("Approximation with 1,000 points: ", approxPi(1000));
console.log("Approximation with 10,000 points: ", approxPi(10000));
console.log("Approximation with 100,000 points: ", approxPi(100000));
console.log("Actual value of pi: ", Math.PI);
