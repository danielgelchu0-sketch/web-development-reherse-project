for (let num = 1; num <= 30; num++) {
    if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else if ( num % 15 === 0 ){
        console.log("FizzBuzz");
    }
    else {
        console.log(num);
    }
}