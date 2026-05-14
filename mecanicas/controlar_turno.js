import { mostrarVizinhos } from "./mostrar_vizinhos.js";


// função para trocar a cor do jogador
function corDoJogador(cor, jogador) {
  if (jogador === "red") {
    return cor === "red" || cor === "#ff0000";
  }

  if (jogador === "blue") {
    return cor === "blue" || cor === "#0000ff";
  }

  return false;
}

export function controlarTurno(
  territorio,
  fronteiras,
  estado
) {

  const cor = territorio.getAttribute("fill");
  // PRIMEIRO CLIQUE
  if (
    corDoJogador(
      cor,
      estado.jogadorAtual
    )
  ) {

    // limpa fronteiras antigas
    estado.vizinhosValidos.forEach(v => {
      if (
        v.getAttribute("fill") === "#ffc0cb"
      ) {
        v.setAttribute(
          "fill",
          v.dataset.corOriginal
        );
      }
    });

    // pega vizinhos
    estado.vizinhosValidos =
      mostrarVizinhos(
        territorio,
        fronteiras
      );

    // salva cor original e pinta
    estado.vizinhosValidos.forEach(vizinho => {

  vizinho.dataset.corOriginal =
    vizinho.getAttribute("fill");

  vizinho.setAttribute(
    "fill",
    "#ffc0cb"
  );

});

    return;

  }

  // SEGUNDO CLIQUE
  if (
    estado.vizinhosValidos.includes(
      territorio
    )
  ) {

    // conquista território
    territorio.setAttribute(
      "fill",
      estado.jogadorAtual
    );

    // restaura os outros
    estado.vizinhosValidos.forEach(vizinho => {

      if (vizinho !== territorio) {

        vizinho.setAttribute(
          "fill",
          vizinho.dataset.corOriginal
        );

      }

    });

    // limpa vizinhos
    estado.vizinhosValidos = [];

    // troca turno
    estado.jogadorAtual =
      estado.jogadorAtual === "red"
        ? "blue"
        : "red";

    console.log(
      "Turno:",
      estado.jogadorAtual
    );

  }

}