/*B.
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
C.
let num = console.input("Enter a number : ");
if (num < 0) {
    console.log("The number is negative");
}
else if (num === 0){
    console.log("The number is zero");
}
else{
    console.log("The number is positive");
}
*/

//D
// mini tip calculator
let bill = console.input("Enter the bill amount : ");
let tippercentage = console.input("Enter the tip percentage : ");
let tipamount = (bill * tippercentage) / 100;
let totalamount = bill + tipamount;

console.log("Tip amount : " + tipamount);
console.log("Total amount : " + totalamount);