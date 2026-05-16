import { mostrarVizinhos } from "./mostrar_vizinhos.js";

// função para trocar a cor do jogador
const boxVermelho =
  document.getElementById("jogador-vermelho");

const boxAzul =
  document.getElementById("jogador-azul");

  function atualizarBoxJogador(
  jogadorAtual
) {

  boxVermelho.classList.remove("ativo");
  boxAzul.classList.remove("ativo");

  if (jogadorAtual === "red") {
    boxVermelho.classList.add("ativo");
  } else {
    boxAzul.classList.add("ativo");
  }

}

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
        fronteiras,
        estado.jogadorAtual
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
  // SEGUNDO CLIQUE
if (
  estado.vizinhosValidos.includes(
    territorio
  )
) {

  const cor =
    territorio.getAttribute("fill");

  // não faz nada se for do próprio jogador
  if (
    corDoJogador(
      cor,
      estado.jogadorAtual
    )
  ) {
    return;
  }

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

  estado.vizinhosValidos = [];

  estado.jogadorAtual =
    estado.jogadorAtual === "red"
      ? "blue"
      : "red";

      atualizarBoxJogador(
  estado.jogadorAtual
);

}
  

}

atualizarBoxJogador("red"); 