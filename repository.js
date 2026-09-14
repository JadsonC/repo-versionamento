// repository.js — versão em memória, no lugar de um banco de dados real
const pedidos = [];

export const repository = {
  async salvar(pedido) {
    const novoPedido = { id: pedidos.length + 1, itens: pedido.itens, total: pedido.total };
    pedidos.push(novoPedido);
    return novoPedido;
  },
};