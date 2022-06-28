let numbers = [];

function collatz(num){

    if(num % 2 == 0){
        num /= 2;
        numbers.push(num);
    } else if(num % 2 != 0){
        num *= 3 + 1;
        numbers.push(num);
    }
    return collatz(num);
}
collatz(4)

document.write(numbers)

//numbers.join(" -> ")

//console.log(collatz(10))