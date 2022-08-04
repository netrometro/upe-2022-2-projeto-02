import express from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.post('/usuario', async (req, res) => {
  const {nome, email, senha} = req.body;

  const feedBack = await prisma.usuario.create({
    data: {
      nome,
      email,
      senha
    }
  })

  return res.status(201).json({ data: feedBack });
})

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});