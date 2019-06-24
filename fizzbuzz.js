const start = 1;
const end = 100;

for (let i = start; i <= end; i++){

    let response = '';

    if (i % 3 == 0) {
        response += 'Fizz'
    }

    if (i % 5 == 0) {
        response += 'Buzz'
    }

    if (response == '') {
        console.log(i)
    } else {
        console.log(response)
    }

}