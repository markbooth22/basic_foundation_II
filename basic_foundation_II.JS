// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function biggieSize(arr){
    for(i = 0; i < arr.length; i++){
        var num = arr[i]; 
        if (num > 0) {
            num = "big"; 
            arr[i] = num
        }
    }
    return arr
}
console.log(biggieSize([-1,2,3,5,-6]))

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
//Start at the var arr[0], if the val is lower change it to the new var, once the for loop

function printlowReturnHigh(arr){
    var lowNum = arr[0]
    var highNum = arr[0]
    for(i = 0; i < arr.length; i++){
        var currentNum = arr[i];
        if (currentNum < lowNum) {
            lowNum = currentNum;
        }
        if (currentNum > highNum) {
            highNum = currentNum;
        } 
    } 
    console.log(lowNum);
    return highNum;
}
var high = printlowReturnHigh([3,4,3,2,1,5]);

console.log(high)


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

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
// var that creates a new arr, for loop over the arr, each postion and double it and push to the new arr, return the new arr

function doubleVision(arr) {
    var newArr = [];
    for(i = 0; i < arr.length; i++) {
        var num = arr[i];
        num *= 2;
        newArr.push(num);
    }
    return newArr;
}

var arr1 = [3,6,8,6,7]
var double = doubleVision(arr1)
console.log(arr1)
console.log(double)

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
//var num = arr[1],  for loop, for each odd idx add 1, asign it into the arr, console.log and return arr

function incrementSeconds(arr) {
    for (i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

var arr2 = incrementSeconds([1,2,3,4,5,6,7,8,9,10])
console.log(arr2)


// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.