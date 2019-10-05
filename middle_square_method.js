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

There is a problem with this approach. There are exceptional numbers whose square value have odd digits which makes it difficult to extract the middle digits like in the case of 15. Squaring 15 would result in 225. And we cannot accept 2 as the middle number since we need two digits. To solve this, we pad zeroes in front of the square value to make it even digits. Now 225 becomes 0225 which makes it easy to extract the middle 2 digits which is 22. After rectifying the problem, the code looks like this.


/**

* Middle Square Method implementation in JavaScript

* for a 2-digit random number sequence

**/  

var seed = 42;

function middleSquareMethod(){

    var result = (seed * seed).toString().padStart(4,"0").slice(1, 3);
    // pad with zero when necessary and extract the middle value.

    seed = parseInt(result);

    return parseInt(result);

}

With just three lines of code, we could generate a maximum of 8n numbers for an n-digit number after which the sequence repeats itself. There is a pitfall though. Some seeds can cause the algorithm to have a shorter cycle like the seed 25, which causes the algorithm to repeat 25 indefinitely.
