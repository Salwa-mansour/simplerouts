// express server
const express = require("express")
const app = express();
const path = require("path");

var url = require('url');
// app.js

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// app.js
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.get('/', (req, res) => {
    // Send the HTML file as the response
    // res.sendFile(path.join(__dirname,'views','index'));
    res.render("index", { message: "EJS rocks!" });
});

app.get('/about', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(__dirname,'views','about.html'));
});
app.use('/{*splat}', async (req, res) => {
   // *splat matches any path without the root path. If you need to match the root path as well /, you can use /{*splat}, wrapping the wildcard in braces.
   res.sendFile(path.join(__dirname,'views','404.html'))
})
//how to send error page
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("my firerst express app ")
});