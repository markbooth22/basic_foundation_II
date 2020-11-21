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