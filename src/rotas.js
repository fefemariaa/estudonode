import express from 'express'

///importação dos endpoints
import calculadoraController from './controller/calculadoraController.js'
import mensagemController from './controller/mensagemController.js'
import lojaController from './controller/lojaController.js'


export default function AdicionarRotas(servidor){
    
//controller

servidor.use (calculadoraController)
servidor.use (mensagemController)
servidor.use (lojaController)


}