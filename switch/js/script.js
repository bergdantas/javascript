/*
*Como manipulei o DOM, seque o material complementar: https://www.w3schools.com/jsref/dom_obj_document.asp 
*/

function calcula(){
    //faz a captura de um valor do input do html e faz o casting
    var salario = Number(document.getElementById("salario").value);

    //manipula os botões de rádio
    const btn = document.querySelector("#calcula"); //estou tendo que apertar 2x. Testar essa função em outros navegadores!        
    const radioButtons = document.querySelectorAll('input[name="opcao"]');
    btn.addEventListener("click", () => {
        let selectedSize;
        //ok, sei que não trabalhei com for each, mas tenho uma lista de botões de rádio para "varrer"... Fica tão mais fácil assim.   =~~
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                opcaoSelecionada = radioButton.value;
                break;
            }
        }
                    
        //testa qual ação fazer com as opções possíveis
        switch (opcaoSelecionada) {
            case "sim":
              // faz o envio do resultado da função calcula() para o campo do HTML de id resultadoSalario
              resultadoSalario.innerText = "Salário: " + (novoSalario - (novoSalario * (6 / 100)));
              calculaVale();
              break;
            case "nao":
              novoSalario = salario;
              // faz o envio do resultado da função calcula() para o campo do HTML de id resultadoSalario
              resultadoSalario.innerText = "Salário: " + novoSalario;
              break;
            default:
              // caso opcaoSelecionada não seja nem "sim" nem "nao"
              console.log("Opção inválida");
          }
    });
}

function calculaVale(){
    //torna o campo de cálculo de vale transporte visível
    valeArea.style.display = "block";   
    //faz a captura de um valor do input do html e faz o casting
    var valeTransporte = Number(document.getElementById("valeTransporte").value);
    valeTransporte = 20*valeTransporte;
    resultadoVale.innerText = "Vale transporte: "+(valeTransporte);
}