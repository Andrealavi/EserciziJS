const fetch = require("node-fetch")


async function handleEvent(){

    return fetch(`http://casa.montanari.live:5000/numbers/100`)
            .then(response => response.json())
            .then(json => console.log(json))
  
  }

handleEvent()