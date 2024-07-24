var matriz1 = [[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]];

console.log(matriz1);

var matriz2 = [[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]];

console.log(matriz2);


function ExibirMatriz(matriz) {
    var tableHTML = "<table border='1' id=tablee>";
    for (var i = 0; i < matriz.length; i++) {
        tableHTML += "<tr Matriz 2X2>";
        tableHTML += "<tr>";
        for (var j = 0; j < matriz[i].length; j++) {
            tableHTML += "<td>" + matriz[i][j] + "</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    return tableHTML;
}

function somarMatrizes(matriz1, matriz2) {
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
        alert("As matrizes devem ter o mesmo tamanho");
    }

    var resultadoSoma = [];
    for (i = 0; i < matriz1.length; i++) {
        resultadoSoma[i] = [];
        for (var j = 0; j < matriz1[i].length; j++) {
            resultadoSoma[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    return resultadoSoma;
}
console.log(resultadoSoma);

document.write("<p id=subtitulo>Resultado da soma de matrizes:</p>")
document.write(ExibirMatriz(matriz1));
document.write("<div id=sinal>+</div>");
document.write(ExibirMatriz(matriz2));
document.write("<div id=sinal>=</div>");

var resultadoSoma = somarMatrizes(matriz1, matriz2);
document.write(ExibirMatriz(resultadoSoma, 'Resultado da Soma'));


function inverteSinais(matriz2) {
    var matrizInvertida = [];
    for (var i = 0; i < matriz2.length; i++) {
        matrizInvertida[i] = [];
        for (var j = 0; j < matriz2[i].length; j++) {
            matrizInvertida[i][j] = -matriz2[i][j];
        }
    }
    return matrizInvertida;
}

function substrairMatrizes(matriz1, matriz2) {
    var matriz2 = inverteSinais(matriz2);
    var resultadoSubtracao = [];
    for (i = 0; i < matriz1.length; i++) {
        resultadoSubtracao[i] = [];
        for (var j = 0; j < matriz1.length; j++) {
            resultadoSubtracao[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    return resultadoSubtracao;
}
console.log(resultadoSubtracao);

document.write("<p id=subtitulo>Resultado da subtração de matrizes:</p>")
document.write(ExibirMatriz(matriz1));
document.write("<div id=sinal>-</div>");
document.write(ExibirMatriz(matriz2));
document.write("<div id=sinal>=</div>");

var resultadoSubtracao = substrairMatrizes(matriz1, matriz2);
document.write(ExibirMatriz(resultadoSubtracao));


function multiplicarMatrizes(matriz1, matriz2) {
    var resultadoMultiplicacao = [];
    for (i = 0; i < matriz1.length; i++) {
        resultadoMultiplicacao[i] = [];
        for (var j = 0; j < matriz2[0].length; j++) {
            resultadoMultiplicacao[i][j] = 0;
            for (k = 0; k < matriz1[0].length; k++) {
                resultadoMultiplicacao[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }
    return resultadoMultiplicacao;
}
console.log(resultadoMultiplicacao);

document.write("<p id=subtitulo>Resultado da multiplicação de matrizes:</p>")
document.write(ExibirMatriz(matriz1));
document.write("<div id=sinal>*</div>");
document.write(ExibirMatriz(matriz2));
document.write("<div id=sinal>=</div>");

var resultadoMultiplicacao = multiplicarMatrizes(matriz1, matriz2);
document.write(ExibirMatriz(resultadoMultiplicacao));

var escalar1 = [Math.floor(Math.random() * 10)];
console.log(escalar1);
function multiplicarPorEscalar1(matriz1) {
    var resultadoMultiplicacaoEscalar1 = [];
    for (i = 0; i < matriz1.length; i++) {
        resultadoMultiplicacaoEscalar1[i] = [];
        for (var j = 0; j < matriz1[i].length; j++) {
            resultadoMultiplicacaoEscalar1[i][j] = matriz1[i][j] * escalar1;
        }
    }
    return resultadoMultiplicacaoEscalar1;
}
console.log(resultadoMultiplicacaoEscalar1);

document.write("<p id=subtitulo>Resultado da multiplicação matriz 1 por um escalar:</p>")
document.write(ExibirMatriz(matriz1));
document.write("<div id=sinal>*</div>");
document.write("<p id= escalar></p>" + escalar1);
document.write("<div id=sinal>=</div>");
var resultadoMultiplicacaoEscalar1 = multiplicarPorEscalar1(matriz1, escalar1);
document.write(ExibirMatriz(resultadoMultiplicacaoEscalar1));

var escalar2 = [Math.floor(Math.random() * 10)];
console.log(escalar2);
function multiplicarPorEscalar2(matriz2) {
    var resultadoMultiplicacaoEscalar2 = [];
    for (i = 0; i < matriz2.length; i++) {
        resultadoMultiplicacaoEscalar2[i] = [];
        for (var j = 0; j < matriz2[i].length; j++) {
            resultadoMultiplicacaoEscalar2[i][j] = matriz2[i][j] * escalar2;
        }
    }
    return resultadoMultiplicacaoEscalar2;
}
console.log(resultadoMultiplicacaoEscalar2);

document.write("<p id=subtitulo>Resultado da multiplicação matriz 2 por um escalar:</p>")
document.write(ExibirMatriz(matriz2));
document.write("<div id=sinal>*</div>");
document.write("<p id= escalar></p>" + escalar2);
document.write("<div id=sinal>=</div>");

var resultadoMultiplicacaoEscalar2 = multiplicarPorEscalar2(matriz2, escalar2);
document.write(ExibirMatriz(resultadoMultiplicacaoEscalar2));

