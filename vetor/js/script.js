var vetorDeNumeros = [8,1,7,3,5,9,7,6,4,2];
var vetorDePalavras = ["Jubiscleidson","Francinalva","Otomar","Josefina"];

//verifica o tamanho do vetor
function tamanho(){
    document.getElementById("resultado").innerHTML = "o vetor de números tem tamanho "+vetorDeNumeros.length+" e o vetor de palavras tem tamanho "+vetorDePalavras.length;
}

//insere elemento no começo do vetor
function inserirNoInicio(){
    vetorDeNumeros.unshift(0);
    vetorDePalavras.unshift("ADD");
    document.getElementById("resultado").innerHTML = vetorDeNumeros +" <br /> "+ vetorDePalavras;
}

//insere elemento no fim do vetor
function inserirNoFim(){
    vetorDeNumeros.push(0);
    vetorDePalavras.push("ADD");
    document.getElementById("resultado").innerHTML = vetorDeNumeros +" <br /> "+ vetorDePalavras;
}

//remove elemento no começo do vetor
function removerDoInicio(){
    vetorDeNumeros.shift();
    vetorDePalavras.shift();
    document.getElementById("resultado").innerHTML = vetorDeNumeros +" <br /> "+ vetorDePalavras;
}

//remove elemento no fim do vetor
function removerDoFim(){
    vetorDeNumeros.pop();
    vetorDePalavras.pop();
    document.getElementById("resultado").innerHTML = vetorDeNumeros +" <br /> "+ vetorDePalavras;
}

//apaga n elementos a partir de um índice
function apagaElementosDoVetor(){
    vetorDeNumeros.splice(1,3);//remove 3 elementos a partir do índice 1
    vetorDePalavras.splice(1,3);//remove 3 elementos a partir do índice 1
    document.getElementById("resultado").innerHTML = vetorDeNumeros +" <br /> "+ vetorDePalavras;
}

//segmenta o vetor na posição i até a posição i-1.
function segmentaVetor(){
    let novoVetorDeNumeros = vetorDeNumeros.slice(1,3);//retorna o vetor com as posições 1 e 2
    let novoVetorDePalavras = vetorDePalavras.slice(1,3);//retorna o vetor com as posições 1 e 2
    document.getElementById("resultado").innerHTML = novoVetorDeNumeros +" <br /> "+ novoVetorDePalavras;
}

//concatena vetores
function concatena(){
    let uniao = vetorDeNumeros.concat(vetorDePalavras);
    document.getElementById("resultado").innerHTML = uniao;
}

//varre um vetor
function varre(){
    vetorDeNumeros.forEach(item => {
        console.log(item);
    });
    vetorDePalavras.forEach(item => {
        console.log(item);
    });

    document.getElementById("resultado").innerHTML = "Ver console do navegador";
}

//copia aplicando um filtro
function copiaVetor(){
    let novoVetorDeNumeros = vetorDeNumeros.map(item => item*2);//retorna o vetor[i]*2
    let novoVetorDePalavras = vetorDePalavras.map(item => item+"Oi");//retorna o vetor com as posições 1 e 2
    document.getElementById("resultado").innerHTML = novoVetorDeNumeros +" <br /> "+ novoVetorDePalavras;
}

function buscaIndice(){
    indice.style.display = "block";   
}

function busca(){
    let valor = Number(document.getElementById("buscaPeloIndice").value);
    document.getElementById("resultado").innerHTML = vetorDeNumeros.indexOf(valor);
}