let velocity = 101

if (velocity <= 40){
    console.log('Velocidade baixa.');
} else if (velocity <= 100) {
    console.log('Cuidado! Próximo a velocidade de risco.');
} else {
    console.log('Velocidade de risco!');
}

(velocity > 100) ? console.log('Velocidade maior que 100') : console.log('Velocidade menor que 100');
