import express from 'express';
import CordelController from './controller/CordelController';
import UsuarioController from './controller/UsuarioController';

const app = express();

app.use(express.json());

app.use(UsuarioController);
app.use(CordelController);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});