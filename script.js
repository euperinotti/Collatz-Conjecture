function start(){
    let input = document.getElementById('number'); //pega a tag do elemento
    
    if(input.value == NaN || input.value < 1){
        alert('Informe um número inteiro positivo');
    } else {
        //executa a validacao do chart
        chartStatus();

        //executa a formula de collatz
        collatz(parseInt(input.value));

        //gera o grafico
        chart();

        //console.log(`Para o valor de: ${input.value}, temos: ${values[0]}`);

        //reset nos arrays
        numbers = [];
        steps = [];
    }
}

function collatz(num){
    let numbers = [num];
    let steps = [];
    let i = 0;
    while(num != 1){
        //se o numero em questao for par divide ele por 2
        if(num % 2 == 0){
            num = num / 2;
            numbers.push(num);
            //se o numero em questao for impar multiplica ele por 3 e soma 1
        } else if(num % 2 != 0){
            num = num * 3 + 1;
            numbers.push(num);
        }
        i++;
        steps.push(i);
    }

    return values = [numbers, steps];
} 

function chart(){

    const ctx = document.getElementById('myChart').getContext('2d');

    const labels = [
        ...values[1]
    ]

    const data = {
        labels: labels,
        datasets: [{
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: values[0],
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

    return myChart;

}

function chartStatus(){
    let chartStatus = Chart.getChart('myChart');
    if (chartStatus != undefined){
        chartStatus.destroy();
    }
}