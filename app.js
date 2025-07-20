// express server
const express = require("express")
const app = express();
const path = require("path");
var url = require('url');

app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(__dirname, 'about.html'));
});
//how to send error page
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("my firerst express app ")
});