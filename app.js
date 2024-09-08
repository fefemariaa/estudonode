import express from 'express';

const servidor = express() //servidor da nossa api
servidor.use(express.json())

servidor.get('/helloworld', (req,resp)=>{
    //codigo endpoint

    resp.send('Hello word!')
})


servidor.get('/mensagem/boasvindas', (req,resp) =>{
    resp.send('Seja Bem-Vindo(a)!')
})

servidor.get('/v2/mensagem/boasvindas', (req,resp) =>{
    resp.send('Bem-VIndo(a) a versão 2!')
})

servidor.get('/mensagem/recado', (req,resp) =>{
    resp.send('Estou ocupada :|')
})



//começando rota


servidor.get('/calculadora/:n1/:n2', (req,resp) =>{
       let n1 =Number (req.params.n1) // é usado para pegar pque está na variável req
       let n2 = Number(req.params.n2) //ou seja, os números dado pelo usuário. E parametros de rota vem sempre como string por isso é necessário para converter para number
       let calculo = n1+n2
       resp.send(`O resultado é ${calculo}`)
})

servidor.get('multiplicar/:n1/:n2', (req,resp) =>{
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let calc = n1*n2

    resp.send(`O resultado é ${calc}`)
})

//usando query


servidor.get('/calculadora2', (req,resp) =>{
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let calc = n1*n2

    resp.send(`O resultado é ${calc}`)

})

servidor.get('/mensagem/ola', (req,resp ) =>{
    let pessoa = req.query.nome ?? '!!' //esse ponto de interrogação é comouma espécie de if, se for indefinifo irá aparecer os pontos de exclamação
    resp.send(`Olá ${pessoa}! Como você está?`)
})

//usando parametro de corpo

servidor.post ( '/media', (req,resp) =>{
    let nota1 = req.body.nota1
    let nota2 = req.body.nota2
    let nota3 = req.body.nota3

    let media = (nota1+nota2+nota3)/3

    resp.send(`A média é ${media}`)
})


servidor.post('/pessoa', (req,resp) =>{
    let nome = req.body.nome
    let idade = req.body.idade
    let dt_nascimento = req.body.dt_nascimento

    let pessoa ={
        nome: nome,
        idade:idade,
        nascimento: dt_nascimento

    }

    resp.send(
        pessoa
    )

})

servidor.post('/dobros', (req,resp)=>{
    let num = req.body.numeros

    let nums2 = []

    for(let i =0; i<num.length; i++){
        nums2[i] = num[i]*2

    }

    resp.send(
        `
        os dobros são ${nums2}
        `
    )
})

servidor.post('/dividindo', (req,resp) =>{
    let numeros = req.body.numeros
    let a = []

    for(let cont =0; cont<numeros.length; cont++){
        a[cont]=numeros[cont]/2
    }
    resp.send(`resultado:${a}`)
})



//RESPONSE misturando parametros

servidor.post('/loja/pedido', (req,resp) =>{
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

    resp.send(`O total a ser pago é R$${total}`)
})


servidor.post('/loja/pedido/completo', (req,resp)=>{
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
    resp.send(`O total a pagar é ${total}`)
})


servidor.post('/loja/marimaria', (req,resp)=>{
    let item= req.body.itens
    let cupom = req.query.cupom
    let totalpedido= 0


    for(let produtos of item){
        totalpedido+=produtos.preco
    
    if(cupom=='marimaria'){
        totalpedido-=100
    }
}

    resp.send(`O total do seu pedido foi R$ ${totalpedido}. Obrigada por vir na loja MariMaria<3`)
}

)








servidor.listen(5001, ()=> console.log('API subida com sucesso!')) //vinculando nossa APi a uma porta
