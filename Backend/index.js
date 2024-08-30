const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

let fruits = [];

app.post('/submit-fruit', (req, res) => {
    const fruit = req.body.fruit;
    fruits.push(fruit);
    console.log(fruits);
    res.send(`Fruit ${fruit} added successfully!`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
