const express = require("express");
const app = express();

const port = 8080;

const path =require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let posts = [
    {
        username:"Divyansh",
        content:"Hello my self divyansh recently learning mernstack development"
    },
    {
        username:"Shiva",
        content:"universe have to face my deplomacy"
    },
    {
        username:"Rana",
        content:"A skilled person"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{ posts });
});

app.get("/posts/new",( req , res )=>{
    res.render("new.ejs");
});

app.post("/posts",( req , res )=>{
    let {username , content} = req.body;
    posts.push({username,content});
    // res.render("index.ejs", {posts});
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log(`App is listening on port :${port}`);
});