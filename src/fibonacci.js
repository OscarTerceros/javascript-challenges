const fibonacci = (number) => {
  // your code here
  let primerNumero = 0, segundoNumero = 1, siguienteTermino, resultado = [];

  for (let i = 1; i <= number; i++) {
    siguienteTermino = primerNumero + segundoNumero;
    primerNumero = segundoNumero;
    segundoNumero = siguienteTermino;
    resultado.push(primerNumero);
  }
  return resultado;
}

module.exports = fibonacci;