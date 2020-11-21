// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function biggieSize(arr){
    for(i = 0; i < arr.length; i++){
        if
    }
}

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])


function maxMinAvg(arr) {
    var maxNum = arr[0]
    var newArr = []
    var minNum = arr[0]
    var sum = 0

    for (var i = 0; i < arr.length; i++){
        sum += arr[i]
        if(arr[i] > maxNum){
            maxNum = arr[i]
        }
        if(arr[i] < minNum){
            minNum = arr[i]
        }
    }
    newArr.push(maxNum)
    newArr.push(minNum)

    var avg = sum/arr.length
    newArr.push(avg)

    return newArr
}

console.log(maxMinAvg([-2,-3,-4,6,8,9]))

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

funtion printReturn(arr) {
    console.log(arr[arr.length-2]);
    for ( var i = 0; i < arr.lenth; i++) {
        var currentNum = arr[i];
        if (currentNum % 2 === 1) {
            return currentNum;
        }
    }
}