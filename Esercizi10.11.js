function inserisciIntero(min, max, str = `Inserisci un valore (fra ${min} e ${max})`,){
    while (true) {
        let x = Number(prompt(str))
        if (x < min || x > max || Object.is(NaN, x)) continue
        return x
    }
}

function media(valori){
    return (valori.reduce((a, b) => a + b, 0))/valori.length
}

function contaValori(valori, pari = false, dispari = false){
    let numeroValori = 0

    valori.forEach(element => { if ((pari === true && element % 2 === 0) || (dispari === true && element % 2 !== 0)) numeroValori += 1});

    return numeroValori
}

function percentuale(valori, pari = false, dispari = false){
    let numeriPari = contaValori(valori, pari, dispari)

    return (100*numeriPari)/valori.length
}

function restituisciDivisori(k){
    let divisori = []

    for (let i = 0; i<=k; i++){
        if (k % i === 0) divisori.push(i)
    }

    return divisori
}

function isPrimo(k){
    let divisori = restituisciDivisori(k)

    let primo = current => current === k || current === 1
    return divisori.every(primo)
}

function contaPrimi(valori){
    let numeriPrimi = 0

    valori.forEach(e => isPrimo(e) ? numeriPrimi++ : numeriPrimi)

    return numeriPrimi
}

const max = (a, b) => (a > b ? a : b)
const min = (a, b) => (a < b ? a : b)

function chiediValori() {

    let valori = []

    do {
        
        let num = inserisciIntero(-1, +Infinity, "Inserisci un valore positivo: ")
        if (num === 0) break
        valori.push(num)

    } while (true);

    return valori
}

function isPerfetto(valore) {
    let divisori = restituisciDivisori(valore, true)
    divisori.pop()
    if ((divisori.reduce((a, b) => a+b, 0)) === valore) return true

    return false

}