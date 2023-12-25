// Challenge 1
function add2nreverse (arr) {
    let copyArr = arr.slice();
    copyArr.unshift(copyArr[0] - 1);
    copyArr.push(copyArr[copyArr.length - 1] + 1);
    return copyArr.reverse();
}


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

console.log(add2nreverse(arr1));
console.log(add2nreverse(arr2));

// Challenge 2
function concatUniqueValues (arr1, arr2) {
    const set = new Set(arr1.concat(arr2));
    return Array.from(set);
}

console.log(concatUniqueValues(arr1, arr2));