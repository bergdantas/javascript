/*
*Como manipulei o DOM, seque o material complementar: https://www.w3schools.com/jsref/dom_obj_document.asp 
*/
//função principal
function calcula(){
    //faz a captura de um valor do input do html e faz o casting
    var salario = Number(document.getElementById("salario").value);

    //chama a função que calcula o desconto do INSS
    var inss = testaIntervalo(salario);
    
    //faz o envio do resultado do resultado da função calcula() para o campo do HTML de id resultado
    document.getElementById("resultado").innerHTML = "O valor do salário com o desconto do INSS é: "+inss;
}

//testa intervalos.
function testaIntervalo(valor){
    var percent;
    //operador ternário
    valor<=1412 ? percent=7.5 : valor<=2666.68 ? percent=9 : valor<=4000.03 ? percent=12 : percent=14;  

    //printa o resultado no console e na tela
    console.log("Foi aplicado o desconto de "+percent+"%");
    return valor-(valor*(percent/100));
}
