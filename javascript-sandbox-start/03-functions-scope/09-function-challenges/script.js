// Challenge 1
const getCelsius = (tempF) => (tempF - 32) * 5 / 9;

function getCelsiusFn(tempF) {
    const tempC = (tempF - 32) * 5 / 9;
    return `The temperature is ${tempC} \u00B0C`;
}

// console.log(getCelsius(32));
console.log(getCelsiusFn(32));

// Challenge 2
const minMax = (arr) => ({
    min: Math.min(...arr),
    max: Math.max(...arr),
});

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function (l, w) {
    console.log(`The area of a rectangle with a length of ${l} and a width of ${w} is ${l * w}.`);
})(10, 5);