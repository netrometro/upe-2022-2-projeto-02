import express from 'express';
import CordelController from './controller/CordelController';
import UsuarioController from './controller/UsuarioController';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);
app.use(UsuarioController);
app.use(CordelController);
app.get('/', (req, res) => {
  res.end('Bem vindo!')
})

app.use('/api', CordelController)

app.use((req, res) => {
  res.status(404).end('Pagina não encontrada!')
})

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});