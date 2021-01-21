"use strict"

async function handleEvent() {

    return getInfo(`https://jsonplaceholder.typicode.com/posts/${Math.round(Math.random()*100)}`, generaCard)
}

function generaCard(json){
    let titolo = document.getElementById("title")
    let body = document.getElementById("body")

    getInfo(`https://jsonplaceholder.typicode.com/photos/${Math.round(Math.random()*5000)}`, generaImmagine)

    titolo.innerHTML = json.title
    body.innerHTML = json.body


}

function generaImmagine(json) {
    let immagine = document.querySelector("img")
    immagine.src = json.url
}

async function getInfo(url, callback){

    return fetch(url)
            .then(response => response.json())
            .then(json => callback(json))
    }
