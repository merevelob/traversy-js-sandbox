function randomOperation(randomOperation) {
    const x = Math.floor(Math.random() * 100) + 1;
    const y = Math.floor(Math.random() * 50) + 1;
    let result = 0;
    switch (randomOperation) {
        case 'sum':
            result = `${x} + ${y} = ${x + y}`;
            break;
        case 'dif':
            result = `${x} - ${y} = ${x - y}`;
            break;
        case 'product':
            result = `${x} * ${y} = ${x * y}`;
            break;
        case 'quotient':
            result = `${x} / ${y} = ${x / y}`;
            break;
        case 'remainder':
            result = `${x} % ${y} = ${x % y}`;
            break;
        default:
            result = 'No operation selected.';
    }
    return result;
}

console.log(randomOperation('sum'));
console.log(randomOperation('dif'));
console.log(randomOperation('product'));
console.log(randomOperation('quotient'));
console.log(randomOperation('remainder'));
console.log(randomOperation());