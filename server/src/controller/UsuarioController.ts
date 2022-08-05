import express from 'express'
import { createUsuario, findAllUsuarios } from '../services/UsuarioService';

const UsuarioController = express.Router();

UsuarioController.post('/usuario', async (req, res) => {
    createUsuario(req, res)
})

UsuarioController.get('/usuarios', async (req, res) => {
    findAllUsuarios(res)
})

UsuarioController.get('/usuario/cordeis', async (req, res) => {
    
})

export default UsuarioController