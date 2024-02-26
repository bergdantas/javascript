//declaração de variáveis
var varString ='Cheguei atrasado!';
var varNumeric = 3.875;
var varBoolean = false;
var varObject = ['Muito obrigado' , 'Álvaro Dias'];
var varMatriz = [[1, 3],[5, 6],[5, 6]];
var varDate = new Date(2024,1,16);
var varFunction = soma(3,4);

//a função também é um tipo de dado
function soma(a,b){
    return a+b;
}

//o objeto pessoa também é um tipo de dado
var pessoa = {
    nome: "berg",
    profissao: "Professor"
}

//checando tipos:
console.log(typeof varString);
console.log(typeof varNumeric);
console.log(typeof varBoolean);
console.log(typeof varObject);
console.log(typeof varMatriz);
console.log(typeof varDate);
console.log(typeof varFunction);
console.log(typeof soma);
console.log(typeof pessoa);
