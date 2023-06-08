// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log("1. Which is larger of 3, 9?: " + maxOfTwoNumbers(3, 9));
  
  // 2.
// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. 
// Again, the Math.max method is not allowed.

const maxOfThree = function(num1, num2, num3){
    if (num1 >= num2 && num3){
        return num1;}
    if (num2 >= num3){
        return num2;}
    else {
        return num3;
    }
}


console.log("2. Which is the largest of 45, 391, 555?: " + maxOfThree(45, 391, 555));

//3.
//Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(x){
    if(x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" || x.toLowerCase() === "u"){
        return true;
    }
    else {
        return false;
    }
}

console.log("3. Is K a vowel?: " + isCharAVowel("K"))

//4.
//Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. 
//For example, sumArray([2, 4, 5]); would return 11.

let total = 0;
let sumArray = function(arr){
    arr.forEach(function(x){
    total += x;
    })
}

sumArray([2, 4, 5]);
console.log("4. Sum of the array, [2, 4, 5]: " + total)

//5.
//Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. 
//For example, multiplyArray([2, 4, 5]); would return 40.

let product = 1;
//sneaky sneaky

function multiplyArray(arr){
    arr.forEach(function(y){
        product *= y;
    })
}

multiplyArray([10, 3, 6]);
console.log("5. Product of the array, [10, 3, 6]: " + product)

//6.
//Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

let numArgs = function(){
    return arguments.length
}

console.log("6. Arguments: 3, 5, 77, 102, 4, 70601.");
console.log("   Number of arguments: " + numArgs(3, 5, 77, 102, 4, 70601));

//7.
//Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. 
//For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(x){
    return x.split("").reverse().join("")
}

console.log("7. Input string: Parsimonious");
console.log("   Reversed: " + reverseString("Parsimonious"))

//Very helpful: https://stackoverflow.com/questions/22075140/am-i-doing-this-split-reverse-join-correctly

//8.
//Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
let strL = 0;
const longestStringInArray = function(strA){
    strA.forEach(function(x){
        if (x.length > strL) //Peeked
            strL = x.length;
    })
    return strL;
}

console.log("8. How many letters in the longest name?: Halifax, Carlsbad, Grimsby, Siam?: " + longestStringInArray(["Halifax", "Carlsbad", "Grimsby", "Siam"]));


//9.
//Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; 
//and returns an array of the strings that are longer than the number passed in. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

arrResult = [];
function stringsLongerThan(arrS, num){
    arrS.forEach(function(x){
        if (x.length > num){
            arrResult.push(x);
        }
    })
    return arrResult;
}

console.log("9. Words >4 letters in 'I cant believe its not butter': " + stringsLongerThan(["I", "cant", "believe", "its", "not", "butter"], 4))