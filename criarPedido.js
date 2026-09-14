// { itens: [{ produtoId: 1, quantidade: 2, preco: 50 }] }
export async function criarPedido(repository, dadosPedido) {
  const total = dadosPedido.itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  return repository.salvar({ itens: dadosPedido.itens, total: total });
}
