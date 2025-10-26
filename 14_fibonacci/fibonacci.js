const fibonacci = function(countArg) {
    let count 
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }
    if ( count < 0) return "Oops";
    if ( count == 0) return 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
        return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
