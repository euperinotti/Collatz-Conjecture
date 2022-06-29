let numbers = []; //array para os resultados
let input = Number(prompt("Digite um numero para gerar a Conjectura"));

numbers.push(input);

function collatz(num){
    while(num != 1){

        //se o numero em questao for par divide ele por 2
        if(num % 2 == 0){
            num = num / 2;
            numbers.push(num) //adiciona o resultado ao array
            //se o numero em questao for impar multiplica ele por 3 e soma 1
        } else if(num % 2 != 0){
            num = num * 3 + 1;
            numbers.push(num) //adiciona o resultado ao array
        }
    }
}

collatz(input)
//numbers.join(" -> ")
console.log(numbers.join(" -> "));