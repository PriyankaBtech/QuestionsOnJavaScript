/*
1. Double using callback.

Write a function that takes in an array of integers and a callback function,
and returns a new array where each element is doubled using the callback.

*/

function doubleArray(arr, callback) {
    const doubleArr = arr.map((num) => {
        return callback(num)
    })
    return doubleArr
}

function callback(num) {
    return num * 2
}

const originalArray = [1, 2, 3, 4]

const result = doubleArray(originalArray, callback)

console.log(result)
// OUTPUT => [ 2, 4, 6, 8 ]


