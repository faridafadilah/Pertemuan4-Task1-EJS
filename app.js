const express = require('express'); // Module Express
const app = express(); 
const port = 3000; //Port Server

// Templating Engine
app.set('view engine', 'ejs');

// Url /
app.get('/', (req, res) => {
    res.render('index', { nama: 'Farida Fadilah'}); // Menampilkan FIle index.html
});
// Url /About
app.get('/about', (req, res) => {
    res.render('about'); // Menampilkan File about.html
});
// Url /contact
app.get('/contact', (req, res) => {
    res.render('contact'); // Menampilkan File Contact.html
});
// Url /contact
app.get('/product/:id', (req, res) => {
    // Mengambil parameter id dan query Category
    res.send(`Product Id:  ${req.params.id} <br> ID Category: ${req.query.category}`); 
});
// Url selain diatas
app.use('/', (req, res) => {
    res.status(404);
    res.send('Not Found: 404');
});

// Membuat Server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});