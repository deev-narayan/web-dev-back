const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,email,password}=req.query; //date come through query 
    res.send(`standard GET response. Welcome ${user}`);
});

app.post("/register",(req,res)=>{ //in post request data come from request body
    let {user,email,password} = req.body;
    res.send(`standard POST response. Welcome ${user} your email is -${email}`);
});

app.listen(port,()=>{
    console.log(`app is listening on port :${port}`);
});