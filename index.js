const path = require("path");
const express = require("express");
const app = express();

//console.log(__dirname);

//console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, '../public');

//to set the view engine
app.set("view engine", "hbs");
app.get("",(req,res)=>{
    res.render("index");
});



app.use(express.static(staticPath));//builtin middleware
app.get("/", (req, res) =>{
    res.send("hello World from the express");
});
app.get('/about', (req, res) =>{
    res.send("hello World from the express about");
});

app.listen(8000, () =>{
    console.log("listening the port at 8000");
});