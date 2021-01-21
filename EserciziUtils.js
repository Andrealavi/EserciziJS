'use strict'

function inserisciIntero(min, max, str = `Inserisci un valore (fra ${min} e ${max})`,){
    while (true) {
        let x = Number(prompt(str))
        if (x < min || x > max || Object.is(NaN, x)) continue
        return x
    }
}

function risolviEquazione(a, b, c){
    let delta = (b ** 2) - (4*a*c)

    if (a === 0) return alert("Hai inserito un valore non valido per a")

    let soluzioni = []

    soluzioni[0] = (-b+Math.sqrt(delta))/(2*a)
    soluzioni[1] = (-b-Math.sqrt(delta))/(2*a)


    return soluzioni
}

const max = (a, b) => (a > b ? a : b)
const min = (a, b) => (a < b ? a : b)

function sommaValori(a, b, pari = false, dispari = false){
    let somma = 0
    for(let i = min(a,b); i<max(a,b); i++){

        if ((pari === true && i % 2 !== 0) || (dispari === true && i % 2 == 0)) continue
        somma += i
    }

    return somma
}

function prodottoValoriPari(a, b){
    let prodotto = 1

    for(let i = min(a,b); i<max(a,b); i++){
        if (i % 2 === 0) continue
        prodotto *= i
    }

    return prodotto
}

function trovaMultipli(a,b,k){
    let multipli = []

    for(let i = min(a,b); i<max(a,b); i++){
        if (i % k !== 0) continue
				multipli.push(i)
    }

		return multipli
	
}

function media(valori){
    return (valori.reduce((a, b) => a + b, 0))/valori.length
}

function chiediValori(a, b, n){

    let valori = []

    for (let i = 0; i < n; i++) {
        valori.push(inserisciIntero(a, b))    
    }

    return valori
}

function contaValori(a, b, valori, pari = false, dispari = false){
    let numeroValori = 0

    valori.forEach(element => { if ((pari === true && element % 2 === 0) || (dispari === true && element % 2 !== 0)) numeroValori += 1});

    return numeroValori
}