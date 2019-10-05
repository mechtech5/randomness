/**

* Middle Square Method implementation in JavaScript

* for a 2-digit random number sequence

**/

var seed;

function middleSquareMethod(){

    var result = (seed * seed).toString().slice(1, 3); // extracting the middle value.

    seed = parseInt(result);

    return parseInt(result);

}
