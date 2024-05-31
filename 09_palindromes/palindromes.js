const palindromes = function (word) {
    let letters = word
        .replace(/[^a-zA-Z1-9]+/g,"")
        .toLowerCase()
        .split("");

    console.log(letters);
    for (let i = 0; i < letters.length/2; i++) {
        console.log(letters[i]);
        console.log(letters[letters.length-i-1]);
        if (letters[i] != letters[letters.length-i-1]) return false;
    }
    return true;
};

palindromes("test  a33!");
// Do not edit below this line
module.exports = palindromes;