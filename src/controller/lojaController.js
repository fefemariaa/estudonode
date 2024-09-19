import { Router } from "express"
const endpoints = Router()


//RESPONSE misturando parametros

endpoints.post('/loja/pedido', (req,resp) =>{
    let total = req.body.total
    let parcelas = req.body.parcelas
    let cupom = req.query.cupom


    if(parcelas>1){
        let juros= total*0.05
        total+=juros
    }

    if(cupom=='marimaria'){
        total-=100
    }

    resp.send({
        total : total
    })
})


endpoints.post('/loja/pedido/completo', (req,resp)=>{
    let parcelas = req.body.parcelas
    let itens = req.body.itens
    let  cupom = req.query.cupom
    let total =0

    for (let produto of itens ){
        total += produto.preco
    }

    if(parcelas>1){
        let juros = total*0.05
        total+=juros
    }
    if(cupom=='marimaria'){
        total-=100
    }
    resp.send({
        total :total
    })
})


endpoints.post('/loja/marimaria', (req,resp)=>{
    let item= req.body.itens
    let cupom = req.query.cupom
    let totalpedido= 0


    for(let produtos of item){
        totalpedido+=produtos.preco
    
    if(cupom=='marimaria'){
        totalpedido-=100
    }
}

    resp.send({
        total : totalpedido
    })
}

)

endpoints.post('/loja/pedido/completo', (req,resp)=>{
    let parcelas = req.body.parcelas
    let prod = req.body.prod
    let cupom = req.query.cupom

    let total = 0

    for(let produto of itens){
        total+=produto.preco
    }

    if(parcelas>1){
        let juros = parcelas*0.5
        total+=juros
    }
    if(cupom ==='marimaria'){
        total-=100

    }
resp.status(400).send({ ///trocando status
    total: total
})

})


export default endpoints
