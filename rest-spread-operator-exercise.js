// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...arguments) => arguments.filter(nums => nums % 2 === 0);

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...minNum) => Math.min(...minNum);

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// Code referenced
// Post by Derek Ziemba on 3/18/23: https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...value) => [...arr, ...value.map(v => v * 2)]; 

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let i = Mathfloor(Math.random()*items.length);
        return [...items.slice(0, i), ...items.slice(i + 1)];
    }


// Code referenced:
// Post by Kelly on 5/6/11 (editted by Corey on 6/10/21): return removeRandom;

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let updatedObj = {...obj};
    updatedObj[key] = val;
    return updatedObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let updatedObj = {...obj};
    delete updatedObj[key];
    return updatedObj;
}

// Code referenced:
// Post by Anil Mirge on 12/15/13 (editted by kalehmann on 6/6/19): https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let updatedObj = {...obj};
    updatedObj[key] = val;
    return updatedObj;

}