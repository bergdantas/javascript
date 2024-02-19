function calcula(){
    //faz a captura de um valor do input do html e faz o casting
    var valorA = Number(document.getElementById("valueA").value);
    var valorB = Number(document.getElementById("valueB").value);
    var valorC = String(valorB);

    //chama as funções
    var operacaoAritimetica = operacoesAritimeticas(valorA, valorB);
    var operacaoRelacional = operacoesRelacionais(valorA, valorB, valorC);

    //faz o envio do resultado do resultado da função calcula() para o campo do HTML de id resultado
    document.getElementById("resultado").innerHTML = operacaoAritimetica+"<br />Para mais funções, pesquise pela biblioteca Math <br />"+operacaoRelacional+"<br />Para mais agrupar várias operações relacionais em uma mesma expressão, use: and (&&), or (||) e not (!) <br />";
}

//função com as operações aritiméticas
function operacoesAritimeticas(valorA, valorB){
    return "valorA+valorB="+(valorA+valorB)+
        "<br/>valorA-valorB="+(valorA-valorB)+
        "<br/>valorA*valorB="+(valorA*valorB)+
        "<br/>valorA/valorB="+(valorA/valorB)+
        "<br/>valorA%valorB="+(valorA%valorB);
}

//função com as operações relacionais
function operacoesRelacionais(valorA, valorB, valorC){
    return "valorA &gt; valorB="+(valorA>valorB)+
        "<br/>valorA &lt; valorB="+(valorA<valorB)+
        "<br/>valorA &ge; valorB="+(valorA>=valorB)+
        "<br/>valorA &le; valorB="+(valorA<=valorB)+
        "<br/>valorA &ne; valorB="+(valorA!=valorB)+
        "<br/>valorB == valorC="+(valorB==valorC)+ //igualdade abstrata
        "<br/>valorB === valorC="+(valorB===valorC) //igualdade estrita      
}