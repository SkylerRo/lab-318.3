const express = require("express");

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log(req.url);

    res.send('<h1> Hello Express </h1>');
});


app.get('/bananas', (req, res) => {
    console.log(req.url);

    res.send('<h1> Got Bananas </h1>');
});


app.post('/user', (req, res) => {
    console.log(req.url);

    res.send('<h1> Hello Express </h1>');
});

app.listen(PORT,()=>{
    console.log("Server is running")
});