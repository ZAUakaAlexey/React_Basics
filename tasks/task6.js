function sayHello(name) {
    return `Привет,${name}!`;
}

console.log(sayHello('Alex'));

function returnNeighboringNumbers(number) {
    let arr=[];
    arr.push(number-1);
    arr.push(number);
    arr.push(number+1)
    return arr;
}

// console.log(returnNeighboringNumbers(5));

function getMathResult(base, steps) {
    
    if (typeof(steps) !== 'number' || steps <= 0) return base;

    let out ="";
    out += base;
    
    for(let i=2; i <=steps; i++) {
        out += '---' + base*i
    }

    return out;
    
}

console.log(getMathResult(10,3));