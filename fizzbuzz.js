const userInput = require('./userInputs');

const start = 1;
const end = userInput.getNumber('Please enter the number to print up to:');

for (let i = start; i <= end; i++) {

    let response = [];

    if (i % 3 === 0) {
        response.push('Fizz');
    }

    if (i % 13 === 0) {
        response.push('Fezz');
    }

    if (i % 5 === 0) {
        response.push('Buzz');
    }

    if (i % 7 === 0) {
        response.push('Bang');
    }

    if (i % 11 === 0) {

        if (response.indexOf('Fezz') >= 0) {
            response = ['Fezz','Bong'];
        } else {
            response = ['Bong'];
        }
    }

    if (i % 17 === 0) {
        response.reverse();
    }

    if (response.length === 0) {
        console.log(i);
    } else {
        console.log(response.join(''));
    }
}
