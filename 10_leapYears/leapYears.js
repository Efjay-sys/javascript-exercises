const leapYears = function(Years) {
    if ((Years % 4 === 0 && Years % 100 !== 0) || 
    (Years & 400 === 0)) {
        return true;
    } else {
        return false;
    }
    };

// Do not edit below this line
module.exports = leapYears;
