const stipendi = [500, 1000, 2370, 1140, 1500, 1750, 5000, 1220, 1600]

function media(valori){
    return (valori.reduce((a, b) => a + b, 0))/valori.length
}

let stipendiAumentati = stipendi.map(e => {
    return e + ((e*10)/100)
})

//console.log(stipendiAumentati)

stipendi.forEach(e => {
    if (e > 1000) console.log(e)
})

let stipendiFiltrati = stipendi.filter(e => {
    if (e > media(stipendi)) return true

    return false
})

//console.log(stipendiFiltrati)

let somma = stipendi.reduce((somma, e) => {
    if (e % 100 == 0) return somma + e

    return somma
})

console.log(somma)