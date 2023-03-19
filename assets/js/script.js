function exibeNome(nome = "Luang") {
    // const nome = "Luang";
    let nomeVariavel = "Luingry";

    console.log(nome);
    console.log(nomeVariavel);

    nomeVariavel = "Luingry Silva Carvalho";

    console.log(nomeVariavel);
}

function soma(a = 1, b = 2) {
    let resultado = a + b;
    // console.log(resultado);

    return resultado;
}

function trataTextoResultado(a, b) {
    let resultadoParaTratar = soma(a, b);
    // let resultadoTratado = "O resultado é:"
    console.log('O resultado é: ' + resultadoParaTratar)
}

function demoArray() {

}

function demoObjeto() {

}
