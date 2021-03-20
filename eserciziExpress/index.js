const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

const usersRepository = path.join(__dirname, './utenti.json')
const utenti = JSON.parse(fs.readFileSync(usersRepository, 'utf-8'))

app.get("/users/login", (req, res) => {
    const {username, password} = req.query
    const credenziali = {
        username: username,
        password: password
    }

    for (credentials of utenti){
        if (credenziali.username === credentials.username) {
            return res.send(`<h1> Bentornato ${username} </h1>`) 
        }
    }

    utenti.push(credenziali)
    console.log(utenti)

    fs.writeFileSync(usersRepository, JSON.stringify(utenti))

    return res.send(`<h1> Benvenuto ${username} </h1>`)


})


app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
