import { Router } from "express"
const endpoints = Router()


import calcularmedia from "../service/exercicios/media.js"

//começando rota


endpoints.get('/calculadora/:n1/:n2', (req,resp) =>{
    let n1 =Number (req.params.n1) // é usado para pegar pque está na variável req
    let n2 = Number(req.params.n2) //ou seja, os números dado pelo usuário. E parametros de rota vem sempre como string por isso é necessário para converter para number
    let calculo = n1+n2
    resp.send(`O resultado é ${calculo}`)
})

endpoints.get('multi/:n1/:n2', (req,resp) =>{

 if(!req.params.n1|| ! req.params.n2){

     let n1 = Number(req.params.n1)
     let n2 = Number(req.params.n2)
     let calc = n1*n2

     resp.send(`O resultado é ${calc}`)}


 else{
     resp.status(400).send("precisa ser número")
 }    
})


 

//usando query


endpoints.get('/calculadora2', (req,resp) =>{
 let n1 = Number(req.query.n1)
 let n2 = Number(req.query.n2)
 let calc = n1*n2

 resp.send(`O resultado é ${calc}`)

})




//usando parametro de corpo

endpoints.post ( '/media', (req,resp) =>{
    let nota1 = req.body.nota1
    let nota2 = req.body.nota2
    let nota3 = req.body.nota3

    let media = calcularmedia(nota1,nota2,nota3)

    resp.send({
        media : media
    })
})


endpoints.post('/pessoa', (req,resp) =>{
    let nome = req.body.nome
    let idade = req.body.idade
    let dt_nascimento = req.body.dt_nascimento

    let pessoa ={
        nome: nome,
        idade:idade,
        nascimento: dt_nascimento

    }

    resp.send({
        pessoa: pessoa
})

})

endpoints.post('/dobros', (req,resp)=>{
    let num = req.body.numeros

    let nums2 = []

    for(let i =0; i<num.length; i++){
        nums2[i] = num[i]*2

    }

    resp.send({
        numeros : nums2,
        resultado :nums2
        
        
})
})

endpoints.post('/dividindo', (req,resp) =>{
    let numeros = req.body.numeros
    let a = []

    for(let cont =0; cont<numeros.length; cont++){
        a[cont]=numeros[cont]/2
    }
    resp.send({
        resultado : a
    })
})

export default endpoints
