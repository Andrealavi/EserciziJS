const handlebars = require('handlebars')
const fs = require('fs');

const document = fs.readFileSync('./src/index.hbs', 'utf-8')
const template = handlebars.compile(document)
const context = {
    title: "Cacca",
    name: "Tullia",
    age: 18,
    city: "Reggio Emilia"
}

const html = template(context)
fs.writeFileSync('./distr/index.html', html)