// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer and dreamer';

function capitalize(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        const capLetter = words[i][0].toUpperCase();
        words[i] = capLetter + words[i].slice(1);        
    }
    const myNewString = words.join(' ');
    return myNewString;
}

console.log(capitalize(myString));
