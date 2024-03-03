//Exemplo 1: uso uma função (que é um tipo de dado) antes da declaração

//uso a função soma
var c = soma(7,3);
console.log(c);

//declaro a função soma
function soma(a,b){
    return a+b;
}

//exemplo 2: uso uma variável antes da declaração
//uso as variáveus a e b
var c = a-b;
console.log(c); 

//declaro as variáveis a e b
var a = 7;
var b = 3;

//No primeiro exemplo, vai executar normalmente, pois a função é içada e no momento do uso já será "conhecida" pelo navegador.
//No segundo exemplo, retornará um NaN (not a number), pois apesar das variáveis a e b serem içadas, as suas inicializações (7 e 3) não são.


