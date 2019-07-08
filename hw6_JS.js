// task #1 
// A function which prints str after n seconds.

function printTimeout(str, n) {
    setTimeout(function () {
        console.log(str)
    }, n * 1000);
}

printTimeout('hello', 10);

// task #2 
// A function which returns sum of all numbers from 1 to n using recursion.

function sumAll(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumAll(n - 1);
    }
}

sumAll(4);

// task #3 
// A function which takes str and time in seconds as arguments, then every second it should count down 
// from time to 0 and print current time to console when time equals to 0 it prints str

function bombTimer(str, time) {
    if (time == 0) {
        console.log(str);
    } else {
        setInterval(function () {
            if (time >= 1) {
                console.log(time--);
            };
        }, 1000);
        setTimeout(function () {
            clearInterval();
            console.log(str);
        }, (time + 1) * 1000);

    }
}

bombTimer('Boooom', 3);

// task #4 
// A function which returns factorial of number using recursion.

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * sumAll(n - 1);
    }
}

factorial(5);

// task #6 
// A function which takes an array of numbers and maxNumber,
// the function returns new array with numbers not higher than maxNumber.

function filterNumbers(arr, maxNumber) {

    function comparator (element) {
        return element <= maxNumber;
    }
    return arr.filter(comparator);
}

filterNumbers([1, 4, 8, 1, 20], 5)


// task #8 
// A function that returns average of numbers in array.

function average(arr) {
    let total = 0;
    arr.map(function (number) {
        total += number;
    });
    const average = total / arr.length;
    return average.toFixed(2);
}
average([1, 4, 2])

// task #9
// A function which concats all first-nested arrays in one array (use reduce):

function concatFirstNestedArrays(arr) {
    let array = arr.reduce(function (acc, value) {
        return acc.concat(value);
    }, [] );
    return array;
}

concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]);





