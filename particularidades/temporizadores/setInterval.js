//executa de tempos em tempos, infinitamente

function acao(){
    console.log("Executando setInterval...");
}

//argumentos: função e tempo (em mS)
setInterval(acao, 1000);