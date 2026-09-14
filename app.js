// app.js
import express from 'express';
import { criarPedido } from './criarPedido.js';
import { repository } from './repository.js';

const app = express();
app.use(express.json()); // lê o corpo JSON da requisição (req.body)

//body: { itens: [{ produtoId: 1, quantidade: 2, preco: 50 }] }
app.post('/pedidos', async (req, res) => {
  const pedido = await criarPedido(repository, req.body);
  res.status(201).json(pedido);
});

export default app;
