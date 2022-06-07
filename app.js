const express = require('express')

const PORT = 8000


const app = express()

app.use(express.json())

app.get('/',(req, res)=>{
    res.send("<h1>Hello World!</h1>")
})

app.get('/home',(req, res)=>{
    res.json({name:"Mahfooz"})
});

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})