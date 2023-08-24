const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.replace(/[\.,?!]/g, "");
    word = word.replace(/\s/g, "");
    let reverseWord = word.split('');
    reverseWord = reverseWord.reverse();
    reverseWord = reverseWord.join('');
    console.log(reverseWord);
    return word === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
