import express from 'express'
import { createCordel, findAllCordeis, findCordelByTitulo } from '../services/CordelService'

const CordelController = express.Router()

CordelController.post('/cordel', async (req, res) => {
    createCordel(req, res)
})

CordelController.get('/cordeis', async (req, res) => {
    findAllCordeis(res)
})

CordelController.get('/cordeis/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Retorna o item específico ${id}`)
})

CordelController.delete('/cordeis/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o item específico ${id}`)
})

CordelController.get('/cordel', (req, res) => {
    findCordelByTitulo(req, res)
} )

export default CordelController