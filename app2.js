const express = require('express');

const app = express()
const path = require("path")
const hbs = require ("hbs")

app.set("view engine" ,"hbs")
app.set("views","express")

const imagesPath = path.join(__dirname,'./images')
app.use(express.static(imagesPath))

const stylePath = path.join(__dirname,'./public')
app.use(express.static(stylePath))

const componentspath = path.join(__dirname,'./components')
hbs.registerPartials(componentspath) //we can directly the path instead of saving it a variable

app.get(("/"), function (req, res) {
    
  res.render("index2",{title:"page1",})
})

app.get(("/about"), function (req, res) {
    res.render("about",{title:"page2"})
})


app.listen(3000,()=>{
  console.log('listening to your port 3000');
});






