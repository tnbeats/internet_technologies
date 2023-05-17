


let isEven = (k) => {
    if (k % 2 == 1) {
        return false;
    }
    else {
        return false;
    }
}

let isEven_v2 = (k) => {
    if (k == 1) {
        return false;
    }
    else if (k == 0) {
        return true;
    }
    else {
        return isEven_v2(k-2)
    }
}

console.log(isEven_v2(5));