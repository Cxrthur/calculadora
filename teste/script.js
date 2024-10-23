var res = document.getElementById('resultado')
var val = document.getElementById('valor')
var total = 0

function soma() {
    if (val.value == '') {
        window.alert('digita')
    } else {
        total += Number(val.value)
        val.value = total
    }
}

function resultado() {
    var vl1 = document.getElementById('valor')
    var vl2 = document.getElementById('valor')
    if (vl1 == 0) {
        vl1.value = val
    } else {
        vl2.value = val
    }
    var soma = vl1 + vl2
    res.innerText = soma

}