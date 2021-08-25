//Global Variables (So they can be reset each time a function is run)
var capital = [];
var shiftArr = [];

/* Question 1 */
var capitalize = function(string) {
    capital = [];

    string.split(" ").map(word => {
        var capitalLetter = word.toUpperCase();
        capital.push(capitalLetter);
    })
    console.log(capital.join(" "));
}; capitalize('First Question: All caps')

/* Question 2 */
var swapCase = function(string){
    capitalize(string);

    var swapCaps = capital;
    for (i=1; i < capital.length; i+=2) {
        swapCaps[i] = capital[i].toLowerCase();
    }
    console.log(swapCaps.join(" "));
}; swapCase('Second Question: Alternating caps');

/* Question 3 */
var shiftLetters = function(string) {
    string.split('').map((letter) => {
        newLetter = letter.charCodeAt(0) + 1;
        shiftArr.push(String.fromCharCode(newLetter));
    })
    console.log(shiftArr.join(''));
}; shiftLetters('Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz');