const inserisciPari = () => {
    let n
    while(n % 2 !== 0) {
        n = Number(prompt("Inserisci un valore pari: "))
    }
    return n
}

function inserisciIntero(min, max, str = `Inserisci un valore (fra ${min} e ${max})`,){
    while (true) {
        let x = Number(prompt(str))
        if (x < min || x > max || Object.is(NaN, x)) continue
        return x
    }
}

function restituisciDivisori(k){
    let divisori = []

    for (let i = 0; i<=k; i++){
        if (k % i === 0) divisori.push(i)
    }
    alert(divisori.length)
    return divisori
}

function isPrimo(k){
    let divisori = restituisciDivisori(k)

    let primo = current => current === k || current === 1
    return divisori.every(primo)
}

function chiediVoti(a, b){

    let Voti = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    while (true) {

        let voto = inserisciIntero(a, b)
        if (voto === 0) break
        Voti[voto] += 1
           
    }

    let moda = Voti.indexOf(Math.max(...Voti))

    return moda

}

function indovinaNumero() {
    let numero = Math.round(Math.random()*1000)

    let x

    do {
        
        x = inserisciIntero(0, 1000, "Prova a indovinare il numero segreto")
        
        if (x < numero) alert("Il numero inserito e' minore del numero segreto")
        if (x > numero) alert("Il numero inserito e' maggiore del numero segreto")


    } while(x !== numero)

    return alert("Bravo! Hai indovinato")
}


alert(inserisciPari())

let k = inserisciIntero(0, 1000)

alert(restituisciDivisori(k))

alert(isPrimo(k))

alert(chiediVoti(0, 10))

indovinaNumero()





