function calcula(){
    var salario = Number(document.getElementById("salario").value);

    var teste = testaIntervalo(salario);
    console.log(teste);
}

function testaIntervalo(valor){
    var valor, percent = 0;
    if(valor >= 2259.21 && valor < 2826.65){
        percent = 7.5;
        console.log("7.5");
    }else{
        if(valor >= 2826.65 && valor < 3751.05){
            percent = 15;
            console.log("15");
        }else{
            if(valor >= 3751.06 && valor < 4664.68){
                percent = 22.5;
                console.log("22.5");
            }else{
                if(valor >= 4664.68){
                    percent = 27.5;
                    console.log("27.5");
                }
            }
        }
    }

    return valor-(valor*(percent/100));
}


