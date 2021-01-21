"use strict"

async function handleEvent(){

  return fetch(`https://jsonplaceholder.typicode.com/users/${Math.round(Math.random()*10)}`)
          .then(response => response.json())
          .then(json => addUser(json))

}

function addUser(json){
const elements = ["name", "username", "email", "phone", "company"]
let table = document.querySelector("table")

let tbody = table.createTBody()
let row = tbody.insertRow()

for (let key in json){
  if (!elements.includes(key)) continue

  let cell = row.insertCell()

  if (key !== "company"){
    cell.innerHTML = json[key]
    continue
  }

  cell.innerHTML = json[key]["name"]
  
}

}
