const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("Server is Ready");
})


// get a list of 5 jokes

app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"A Joke",
            content:"this is A joke"
        },
        {
            id:2,
            title:"B Joke",
            content:"this is B joke"
        },
        {
            id:3,
            title:"C Joke",
            content:"this is C joke"
        },
        {
            id:4,
            title:"D Joke",
            content:"this is D joke"
        },
        {
            id:5,
            title:"E Joke",
            content:"this is E joke"
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is runnning on ${port}`);
})