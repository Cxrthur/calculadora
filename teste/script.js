var res = document.getElementById('resposta')
var total = 0

function soma() {
    var vl1 = document.getElementById('valor1').value
    if (vl1.length == 0) {
        window.alert('Digita alguma coisa dog')
    } else {
        var num = document.getElementById('valor1')
        total += Number(num.value)
        res.innerHTML = total
        num.value = ''
    }
}