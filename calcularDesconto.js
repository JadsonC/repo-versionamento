export function calcularDesconto(valor, percentual) {
    if (percentual < 0 || percentual > 100) {
        throw new Error('Percentual inválido');
    }

    return valor * (percentual);
}