console.log('Hello world!');
const express = require('express') // call library
const app = express() //put the library in app
app.use(express.json());

const port = 3001

const videos = [];
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

app.get("/vid", (req, res) => {
    res.send(videos); // all product
})

app.post('/vid', (req, res) => {
    const video = req.body;
    console.log(video);
    try {
        res.status(201);
        res.send('creating a video');
        videos.push(video);
    } catch (err) {
        res.status(400);
        res.send('Invalid Video object!');
    }

})

app.get("/products", (req, res) => {
    res.json(products); // all product
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})

/////////////////////////////////////////////////////
