

export function generateCode() {
    const codigoGerado = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('codigoRecuperacao', codigoGerado);

    return codigoGerado;
}