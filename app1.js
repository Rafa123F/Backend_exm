const express = require('express') // call library
const app = express() //put the library in app
const port = 3001

const products = [
    {
        id: 1,
        name: "Phone",
        price: 300
    },
    {
        id: 2,
        name: "Laptop",
        price: 1000
    },
    {
        id: 3,
        name: "Tablet",
        price: 500
    }
]

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/products", (req, res) => {
    res.json(products); // all product
})

app.get("/products/id=1", (req, res) => {
    res.json(products[0]); // first product
})


app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})

/////////////////////////////////////////////////////
