const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.json())

app.get('/', middleware, (req, res) => {
    res.send('Hello')
})

app.get('/api/v1/dialogs', (req, res) => {
    const dialogs = [
        {
            question: "salut",
            answer: "coucou"
        },
        {
            question: "ça va ?",
            answer: "bien et toi ?"
        },
        {
            question: "quel age as-tu ?",
            answer: "22 ans"
        }
    ]
    res.status(200).json({ message: dialogs })
})

app.post('/api/v1/dialogs', (req, res) => { 
    console.log(req.body.question)
    let matchFound=false;
    const dialogs=[
        {
            question : "salut",
            answer : "coucou"
        },
        {
            question : "ca va?",
            answer : "oui et toi?"
        },
        {
            question : "quel age as tu?",
            answer : "22 ans"
        }
    ]
    dialogs.forEach(dialog =>{
        if(dialog.question === req.body.question){
            matchFound = true;
            res.status(200).json({Response : dialog.answer})
            return
        }
    })
    if(!matchFound){
        res.status(200).json({message: "pas de réponse a vous apporter"})
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function middleware(req, res, next){
    console.log('coucou')
    next()
}