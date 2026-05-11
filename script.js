const mapa = document.getElementById("mapa");
const nomePais = document.getElementById("nomePais");
const display = document.getElementById("tempo");

fetch("mapa.svg")
  .then(response => {
    if (!response.ok) {
      throw new Error("Arquivo mapa.svg não encontrado");
    }
    return response.text();
  })
  .then(svg => {
    mapa.innerHTML = svg;

    const territorios = mapa.querySelectorAll("path");

    territorios.forEach(territorio => {
      territorio.addEventListener("click", () => {
        territorio.style.fill = "red";
      });

      territorio.addEventListener("mouseenter", () => {
        nomePais.textContent = territorio.id || "desconhecido";
      });

      territorio.addEventListener("mouseleave", () => {
        nomePais.textContent = "Passe o mouse em um território";
      });
    });
  })
  .catch(error => {
    console.error("Erro ao carregar o mapa:", error);
    nomePais.textContent = "Erro ao carregar mapa";
  });

let tempoRestante = 30;

function atualizarTimer() {
  let minutos = Math.floor(tempoRestante / 60);
  let segundos = tempoRestante % 60;

  minutos = minutos.toString().padStart(2, "0");
  segundos = segundos.toString().padStart(2, "0");

  display.textContent = `${minutos}:${segundos}`;

  if (tempoRestante > 0) {
    tempoRestante--;
  } else {
    clearInterval(timer);
    alert("Tempo esgotado!");
  }
}

atualizarTimer();
const timer = setInterval(atualizarTimer, 1000);