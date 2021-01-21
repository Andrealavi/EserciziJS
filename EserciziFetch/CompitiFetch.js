const fetch = require("node-fetch")

async function getInfo(){
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => handlePost(data))
        .catch(err => {throw(err)})
}

function handlePost(data){

    data
        .filter(e => {return e.userId === 1})
        .forEach((e, i) => console.log(`Commento numero ${i+1}: ${e.body}\n`))
    
    data
    .filter(e => {return e.userId === 1})
    .forEach((e, i) => console.log(`Titolo numero ${i+1}: ${e.body}\n`))
    
}

getInfo()