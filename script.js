// exemplo de interação
document.querySelectorAll(".countries path").forEach(p => {
    p.onclick = () => {
      p.style.fill = "red";
    };
  });

  let tempoRestante = 300; // 5 minutos = 300 segundos
    const display = document.getElementById("tempo");

    function atualizarTimer() {
        let minutos = Math.floor(tempoRestante / 60);
        let segundos = tempoRestante % 60;

        // formatação 05:00
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


    window.onload = () => {

    const territorios = document.querySelectorAll("path");

    const nomePais = document.getElementById("nomePais");

    territorios.forEach(territorio => {

        territorio.addEventListener("mousemove", () => {

            // pega o conteúdo do d=""
            const pathData = territorio.getAttribute("id");

            nomePais.textContent = `${pathData || "desconhecido"}`;

        });

    });

};