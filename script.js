var res = document.getElementById('visor')
var total = 0

function n1() {
    res.value += 1
}

function n2() {
    res.value += 2
}

function n3() {
    res.value += 3
}

function n4() {
    res.value += 4
}

function n5() {
    res.value += 5
}

function n6() {
    res.value += 6
}

function n7() {
    res.value += 7
}

function n8() {
    res.value += 8
}

function n9() {
    res.value += 9

}

function n0() {
    res.value += 0
}

function soma() {
    if (res.value == '') {
        window.alert('nenhum numero digitado')
    } else {
        total += Number(res.value)
        res.value = total
    }
}