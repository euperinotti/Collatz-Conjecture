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
    let steps = [0];

    //contador de etapas
    let i = 0;
    while(num != 1){
        if(num % 2 == 0){
            //se o numero em questao for par divide ele por 2
            num = num / 2;
            numbers.push(num);
        } else if(num % 2 != 0){
            //se o numero em questao for impar multiplica ele por 3 e soma 1
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
        //insere todos os valores de steps como itens para o labels
        ...values[1]
    ]

    const data = {
        labels: labels,
        datasets: [{
        label: 'Pontos',
        backgroundColor: 'rgb(23, 134, 224)',
        borderColor: 'rgb(23, 134, 224)',
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

//funcao para verificar a situacao do chart
function chartStatus(){
    let chartStatus = Chart.getChart('myChart');
    if (chartStatus != undefined){
        //caso ja exista um chart definido ele é destruido
        chartStatus.destroy();
    }
}