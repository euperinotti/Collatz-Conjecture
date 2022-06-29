let input = document.getElementById('number');
function collatz(num){
    let numbers = []; //array para os resultados
    let i = 0;
    let steps = [];
    numbers.push(num);

    if(num == NaN || num < 1){
        alert('informe um numero positivo');
    } else {
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
            i++;
            steps.push(i);
        }
    }

    return values = [numbers, steps];
}

const ctx = document.getElementById('myChart').getContext('2d');

const labels = [
    
]

const data = {
    labels: labels,
    datasets: [{
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

const config = {
    type: 'line',
    data: data,
    options: {}
  };

const myChart = new Chart(
    ctx,
    config
  );