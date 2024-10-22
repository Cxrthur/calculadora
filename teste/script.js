var res = document.getElementById('resposta')

function soma() {
    var vl1 = document.getElementById('valor1').value
    var vl2 = document.getElementById('valor2').value
    if (vl1.length == 0 || vl2.length == 0) {
        window.alert('Digita alguma coisa dog')
    } else {
        var soma = Number(vl1) + Number(vl2)
        res.innerHTML = soma
    }
}