//recuperando quantidade de cada tipo de ingresso declarado no html
let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);

function atualizarQuantidades(tipo, qtd){
    switch (tipo){
        case "inferior":
            if (qtdInferior >= qtd){
                qtdInferior = qtdInferior - qtd;
            } else {
                alert("Quantidade indisponivel para pista inferior.");
            }
            break;
        case "superior":
            if (qtdSuperior >= qtd){
                qtdSuperior -= qtd;
            } else {
                alert("Quantidade indisponivel para pista superior.");
            }
            break;
        case "pista":
            if (qtdPista >= qtd){
                qtdPista -= qtd;
            } else {
                alert("Quantidade indisponivel para pista.");
            }
            break;
        default:
            alert("Tipo de ingresso invalido.");
    }
}

//criando função comprar que esta declarada no html
function comprar(){
    //recuperando os valores inseridos no tipo de ingresso e na quantidade
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);
    console.log(`tipo: ${tipo}, quantidade: ${qtd}`);

    //subtraindo as quantidades compradas das quantidades totais
    atualizarQuantidades(tipo, qtd);
    
    console.log(`pista: ${qtdPista}, superior: ${qtdSuperior}, inferior: ${qtdInferior}`);

    document.getElementById("qtd-pista").textContent = qtdPista;
    document.getElementById("qtd-superior").textContent = qtdSuperior;
    document.getElementById("qtd-inferior").textContent = qtdInferior;
}
