var res = document.getElementById('resposta')
var val = document.getElementById('visor')
let total = []

function botarnumero(num) {
    val.value += num
}

function soma() {
    if (total[0] === undefined) {
        total[0] = Number(val.value)
    } else {
        total[1] = Number(val.value)
        var soma = total[0] + total[1]
        res.innerHTML = soma
        total = []
    }
    val.value = ''
}