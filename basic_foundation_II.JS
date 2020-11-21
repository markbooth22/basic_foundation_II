// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function biggieSize(arr){
    for(i = 0; i < arr.length; i++){
        if
    }
}


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