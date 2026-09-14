import request from "supertest";
import app from "./app.js";
import expect from "expect";

test('POST /pedidos cria um pedido e retorna 201', async () => {
    const resposta = await request(app)
        .post('/pedidos')
        .send({ itens: [{ produtoId: 1, quantidade: 2, preco: 50 }] });

    expect(resposta.status).toBe(201);
    expect(resposta.body).toHaveProperty('id');
    expect(resposta.body.total).toBe(100);
})