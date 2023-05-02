const express = require('express');
const app = express();
const port = process.env.port || 5000;
const categories = require('./Data/categories.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is Running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
})