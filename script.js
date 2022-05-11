function calcularMedia() {
    let numeros = document.querySelector('#numeros').value; //Pega o valor do input
    let numerosArray = numeros.split(','); //transforma os valores do input em Array
    let quant = document.querySelector('#quant'); // Seleciona o input Quantidade
    let erro = document.querySelector('#erro'); // Seleciona o input de erro

    if(numerosArray.length < 2) {
        erro.style.display = 'block'; // Se houver menos de 2 números, mostra uma mensagem de erro
    } else {
        erro.style.display = 'none'; // Se houver pelo menos 2 números, esconde a mensagem de erro
        quant.value = `${numerosArray.length}`; //Insere no input quantidade a quantidade de itens no Array de números
        let res = document.querySelector('#res'); // Seleciona o input de resultado (média)

        soma = 0 //soma começa no zero
        for(var i in numerosArray) { // Para cada posição em números array
            soma += parseInt(numerosArray[i]); //Soma = soma + numerosArray[posição]
        }
        
        let media = soma / numerosArray.length; //Pega o resultado da soma de todos números de array e divide pela quantidade de números dentro do Array

        res.value = media.toFixed(2); //Insere no input de resultado (média)
    }
}

function apagar() {
    let numeros = document.querySelector('#numeros');
    let quant = document.querySelector('#quant');
    let res = document.querySelector('#res');

    numeros.value = ''
    quant.value = ''
    res.value = ''
}