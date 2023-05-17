let v = [1, 2, 3];
let p = 2;

let norm = (v, p) => {
    let sum = 0;
    for (let i = 0; i < v.length; i++) {
        sum += Math.pow(Math.abs(v[i]), p);
    }
    return Math.pow(sum, 1/p);
}

console.log(norm(v, p));