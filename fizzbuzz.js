const start = 1;
const end = 100;

for (let i = start; i <= end; i++) {

    let response = [];

    if (i % 3 === 0) {
        response.push('Fizz');
    }

    if (i % 5 === 0) {
        response.push('Buzz');
    }

    if (i % 7 === 0) {
        response.push('Bang');
    }

    if (i % 11 === 0) {
        response = ['Bong'];
    }

    if (i % 13 === 0) {
        const beginsWithB = response.map(value => value[0]==='B');
        const index = beginsWithB.indexOf(true);

        if (index === -1) {
            response.push('Fezz');
        }
        else {
            response.splice(index,0,'Fezz');
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
