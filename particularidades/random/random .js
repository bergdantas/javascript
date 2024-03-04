//sorteia um número entre 1 e 10
var max=10;
var min=1;
//randon: sorteia valores aleatório 0-1
//round: arrendonda
//(max - min) + min: muda a escala de 0-1 para 1-10
numeroSorteado = Math.round(Math.random()*(max - min) + min);

//escolho um valor qualquer para a minha variável
var minhaEscolha = 5;

//comparo o valor que eu escolhi com o valor que o algoritmo sorteou
console.log(minhaEscolha==numeroSorteado);
console.log("O algoritmo sorteou o número"+" "+numeroSorteado+" "+"e voçê escolheu o número"+" "+minhaEscolha);