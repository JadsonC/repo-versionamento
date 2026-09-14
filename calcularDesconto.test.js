// Anatomia de um teste unitário (padrão AAA)

import { calcularDesconto } from './calcularDesconto.js';

test('calcula 10% de desconto sobre 200', () => {
  // Arrange (preparar)
  const valor = 200;
  const percentual = 10;

  // Act (executar)
  const resultado = calcularDesconto(valor, percentual);

  // Assert (verificar)
  expect(resultado).toBe(20);
});

test('lança erro para percentual inválido', () => {
  expect(() => {
    calcularDesconto(200, 150);
  }).toThrow('Percentual inválido');
});
