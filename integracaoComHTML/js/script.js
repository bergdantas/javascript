function calcula(){
    //faz a captura de um valor do input do html e faz o casting 
    var salario = Number(document.getElementById("salario").value);

    //chama a função que testa o intervalo
    var teste = testaIntervalo(salario);
    console.log(teste);
}

function testaIntervalo(valor){
    var valor, percent = 27.5;
    //testa intervalos.
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


