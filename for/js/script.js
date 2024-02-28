/*
*Como manipulei o DOM, seque o material complementar: https://www.w3schools.com/jsref/dom_obj_document.asp 
*/
//função principal
function calcula(){
    //faz a captura de um valor do input do html e faz o casting
    var vI = Number(document.getElementById("vI").value);
    var vF = Number(document.getElementById("vF").value);
    var cont=vI, acum=0;
    
    for(cont=vI;cont<=vF;cont++){
        //atualizo o acumulador
        acum=acum+cont;
    }
    
    //faz o envio do resultado do resultado da função calcula() para o campo do HTML de id resultado
    document.getElementById("resultado").innerHTML = "O valor do somatório é "+acum;
}