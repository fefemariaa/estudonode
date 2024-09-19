
import { Router } from "express"
const endpoints = Router()


endpoints.get('/helloworld', (req,resp)=>{
    //codigo endpoint

    resp.send('Hello word!')
})


endpoints.get('/mensagem/boasvindas', (req,resp) =>{
    resp.send('Seja Bem-Vindo(a)!')
})

endpoints.get('/v2/mensagem/boasvindas', (req,resp) =>{
    resp.send('Bem-VIndo(a) a versão 2!')
})

endpoints.get('/mensagem/recado', (req,resp) =>{
    resp.send('Estou ocupada :|')
})




endpoints.get('/mensagem/ola', (req,resp ) =>{
    let pessoa = req.query.nome ?? '!!' //esse ponto de interrogação é comouma espécie de if, se for indefinifo irá aparecer os pontos de exclamação
    resp.send(`Olá ${pessoa}! Como você está?`)
})


export default endpoints
