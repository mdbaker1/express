/*  Using Express
 *  Date: 11/10/17
 *  Author: Mike Baker
 * 
 *  Filename: index.js
*/

var express = require('express');
var app = express();
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
});
app.use("*", (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(3000, () => console.log('Server is running'));
