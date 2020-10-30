require('./config/config')

const express = require('express')
const app = express()

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded  app.use === a un midleware
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
 


app.get('/', function (req, res) {
    res.json('Hello World')
})

app.get('/usuario', function (req, res) {
    res.json('get usuarios')
})

app.post('/usuario', function (req, res) {

    let body = req.body

    if(body.nombre === undefined){

        res.status(400).json({
            ok: false,
            mensaje: "el nombre es necesario"
        })

    }else{
        
        res.json( { 
            users: body 
        } )

    }

})

app.put('/usuario/:id', function (req, res) {

    let id = req.params.id

    res.json( {
        id
    } )
})
 
app.listen(process.env.PORT, ()=>{
    console.log("escuchando el puerto", process.env.PORT)
})