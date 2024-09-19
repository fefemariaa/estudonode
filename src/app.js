import  'dotenv/config.js'

import express from 'express';
import cors from 'cors'
import AdicionarRotas from './rotas.js';

const servidor = express() //servidor da nossa api
servidor.use(express.json())
servidor.use (cors())

//adicionar rotas

AdicionarRotas(servidor)


servidor.listen(process.env.PORTA, ()=> console.log('API subida com sucesso!')) //vinculando nossa APi a uma porta
