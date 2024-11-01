console.log('Hello world!');
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
products.forEach(function (product) {
    let id = product.id;
    console.log(id);
    if (id == 1) {
        app.get(`/products/id=${id}`, (req, res) => {
            res.json(products[0]); // first product   
        })
    }
    else if (id == 2) {
        app.get(`/products/id=${id}`, (req, res) => {
            res.json(products[1]); // first product 
        })
    }
    else if (id == 3) {
        app.get(`/products/id=${id}`, (req, res) => {
            res.json(products[2]); // first product
        })
    }
});


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/products", (req, res) => {
    res.json(products); // all product
})

app.get("/products/id=4", (req, res) => {
    res.send("No data!");
})
app.get("/products/id=5", (req, res) => {
    res.send("No data!");
})


app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})

/////////////////////////////////////////////////////
