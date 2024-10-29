var res = document.getElementById('resposta')
var result = document.getElementById('resultado')
var val = document.getElementById('visor')
let total = []
let resultsoma = null

function botarnumero(num) {
    val.value += num
}

function iguala() {
    if (total.length === 2) {
        var soma = total[0] + total[1]
        result.innerHTML = soma
        result.style.display = 'block'
        val.style.display = 'none'
        total = []
    }
    val.value = ''
}

function soma() {
    if (total[0] === undefined) {
        total[0] = Number(val.value)
    } else {
        total[1] = Number(val.value)
    }
    val.value = ''
}