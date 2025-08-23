// express server
const express = require("express")
const app = express();
const path = require("path");
var ejs = require('ejs');
var url = require('url');
// app.js
app.engine('ejs', require('ejs').__express);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ejs);

app.get('/', (req, res) => {
    // Send the HTML file as the response
    // res.sendFile(path.join(__dirname,'views','index'));
    res.render("index", { message: "EJS rocks!" });
});

app.get('/about', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(__dirname,'views','about.html'));
});
app.get('/{*}', async (req, res) => {
   // *splat matches any path without the root path. If you need to match the root path as well /, you can use /{*splat}, wrapping the wildcard in braces.
   res.sendFile(path.join(__dirname,'views','404.html'))
})
//how to send error page
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("my firerst express app ")
});