var res = document.getElementById('resultado')
var val = document.getElementById('valor')
let total = []

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