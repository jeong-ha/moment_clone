const calculator = {
    add: function(a, b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    times: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    }
}

const plusResult = calculator.add(5,2);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(minusResult, -4);
const divideResult = calculator.divide(timesResult,2);
const powerResult = calculator.power(2, divideResult);
console.log(powerResult);