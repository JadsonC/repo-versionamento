import { jest } from '@jest/globals';
import { criarPedido } from './criarPedido.js';
import expect from 'expect';

test('salva pedido usando o repository', async () => {
  // Arrange (preparar)
  const repositoryMock = {
    salvar: jest.fn().mockResolvedValue({ id: 1, total: 100 }),
  };

  // Act (executar)
  // (repository, dadosPedido)
  const resultado = await criarPedido(repositoryMock, {
    itens: [{ produtoId: 1, quantidade: 2, preco: 50 }],
  });

  // Assert (verificar)
  expect(repositoryMock.salvar).toHaveBeenCalledTimes(1);
  expect(resultado.id).toBe(1);
});
