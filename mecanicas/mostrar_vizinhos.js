function corDoJogador(cor, jogador) {

  if (jogador === "red") {
    return cor === "red" || cor === "#ff0000";
  }

  if (jogador === "blue") {
    return cor === "blue" || cor === "#0000ff";
  }

  return false;

}

export function mostrarVizinhos(
  territorio,
  fronteiras,
  jogadorAtual
) {

  const paisClicado = territorio.id;

  const nomesVizinhos =
    fronteiras[paisClicado];

  const listaVizinhos = [];

  if (nomesVizinhos) {

    nomesVizinhos.forEach(nomeVizinho => {

      const vizinho =
        document.getElementById(nomeVizinho);

      if (vizinho) {

        const cor =
          vizinho.getAttribute("fill");

        // NÃO adiciona países do próprio jogador
        if (
          !corDoJogador(
            cor,
            jogadorAtual
          )
        ) {

          listaVizinhos.push(vizinho);

        }

      }

    });

  }

  return listaVizinhos;

}