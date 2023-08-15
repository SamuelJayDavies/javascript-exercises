const reverseString = function(string) {
    let charArr = string.split("");
    let reverseArr = [];
    let j = 0;
    for(let i=charArr.length; i>=0; i--) {
        reverseArr[j] = charArr[i];
        j++;
    }
    return reverseArr.join("");
};

// Do not edit below this line
console.log(reverseString("Hello World"));
module.exports = reverseString;
