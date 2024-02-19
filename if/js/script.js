/*
*Como manipulei o DOM, seque o material complementar: https://www.w3schools.com/jsref/dom_obj_document.asp 
*/
//função principal
function calcula(){
    //faz a captura de um valor do input do html e faz o casting
    var salario = Number(document.getElementById("salario").value);

    //chama a função que calcula o desconto do IRPF
    var impostoDeRenda = testaIntervalo(salario);
    
    //faz o envio do resultado do resultado da função calcula() para o campo do HTML de id resultado
    document.getElementById("resultado").innerHTML = "O valor do salário com o desconto do IRPF é: "+impostoDeRenda;
}

//testa intervalos.
function testaIntervalo(valor){
    var percent = 27.5;
    //matei a última condição e não a primeira, como tinha feito na aula.
    if(valor<2259.21){
        percent = 0;        
    }else{
        if(valor<2826.65){
            percent = 7.5;
        }else{
            if(valor<3751.05){
                percent = 15;
            }else{
                if(valor<4664.68){
                    percent = 22.5;
                }
            }
        }
    }
    console.log("Foi aplicado o desconto de "+percent+"%");
    return valor-(valor*(percent/100));
}