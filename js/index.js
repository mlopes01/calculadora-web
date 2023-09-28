

//funçao para mostrar valores na tela
function getvalue(element) {
    var num = document.getElementById('print-screen').innerHTML
    //excessoe para quando os caracteres quebrarem a tela 
    if (num.length <= 14) {
        document.getElementById('print-screen').innerHTML = num + element
    } else {
        document.getElementById('print-screen').innerHTML = null
    }
}
//funçao para lmpar a tela
function cleanScreen() {
    document.getElementById('print-screen').innerHTML = ''
}
//funçao para apagar ultimo caractere inserido
function backSpace() {
    var apagando = document.getElementById('print-screen').innerHTML
    document.getElementById('print-screen').innerHTML = apagando.substring(0, apagando.length - 1)
}
//funçao para mostrar o resultado
function result() {
    var resultado = document.getElementById('print-screen').innerHTML

    if (resultado) {
        document.getElementById('print-screen').innerHTML = eval(resultado)
    } else {
        document.getElementById('print-screen').innerHTML = 'Error'
    }
}