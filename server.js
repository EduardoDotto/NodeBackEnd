const express = require('express')
const app = express()

const fs = require('fs')

let dados =[]
function getDados(){
    dados = JSON.parse(fs.readFileSync('./db.json'))
}

app.get('/user', function(req, res){
    getDados()
    // const dados = fs.readFileSync('./db.json')
    res.send(dados)
});

app.get('/user/:id', function(req, res){
    getDados()
    const id = req.params.id
    const usuario = dados.filter(function(item){
        return item.id==id
    })
    res.send(usuario)
});

app.listen(3000, function(){
    console.log("O servidor está online")
});