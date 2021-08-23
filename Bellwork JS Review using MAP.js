// Write a function capitalize that takes a string and uses .map to return the same string in all caps.
var capitalize = function(string) {
    var capital = [];

    string.split(" ").map(word => {
        var capitalLetter = word.toUpperCase();
        capital.push(capitalLetter);
    })
    console.log(capital.join(" "));
};

capitalize('hallo i am barik.');

2.
// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hey girl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
var swapCase = function(string){

}



3.
// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
var shiftLetters = function(string){

}