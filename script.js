var total = ''
var res = document.getElementById('visor')

function n1() {
    res.value += 1
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function n2() {
    res.value += 2
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function n3() {
    res.value += 3
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function n4() {
    res.value += 4
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function n5() {
    res.value += 5
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function n6() {
    res.value += 6
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function n7() {
    res.value += 7
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function n8() {
    res.value += 8
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function n9() {
    res.value += 9
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function n0() {
    res.value += 0
    document.getElementById('resultado').style.display = 'none'
    document.getElementById('visor').style.display = 'block'
}

function soma() {
    var valor = document.getElementById('visor').value
    document.getElementById('resultado').style.display = 'block'
    document.getElementById('visor').style.display = 'none'
    if (valor.length == 0) {
        window.alert('Digite alguma valor')
    } else {
        total += valor
        document.getElementById('resultado').innerText = "Total: " + total
    }
}

function subt() {
    var valor = document.getElementById('visor').value
    if (valor.length == 0) {
        window.alert('Digite alguma valor')
    }
}

function resultado() {
    var valor = document.getElementById('visor').value
    if (valor.length == 0) {
        window.alert('Digite alguma valor')
    }
}

function divs() {
    var valor = document.getElementById('visor').value
    if (valor.length == 0) {
        window.alert('Digite alguma valor')
    }
}