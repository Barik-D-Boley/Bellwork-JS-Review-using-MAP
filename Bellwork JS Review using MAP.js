// Write a function capitalize that takes a string and uses .map to return the same string in all caps.
var capital = [];

var capitalize = function(string) {

    string.split(" ").map(word => {
        var capitalLetter = word.toUpperCase();
        capital.push(capitalLetter);
    })
    console.log(capital.join(" "));
};

// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() function to return a string where every other word is in all caps.
var swapCase = function(string){
    capitalize(string);

    var swapCaps = capital;
    for (i = 1; i < capital.length; i+=2) {
        swapCaps[i] = capital[i].toLowerCase();
    }
    console.log(swapCaps.join(" "));
}

swapCase('this is the second question');

// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use Ascii code to accomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
var shiftLetters = function(string) {
    string.split('').map((letter) => {
        letter
    });


}