export function aparecerPaises(
  territorios
) {

  const tooltip =
    document.createElement("div");

  tooltip.style.position = "fixed";
  tooltip.style.background = "black";
  tooltip.style.color = "white";
  tooltip.style.padding = "5px 10px";
  tooltip.style.borderRadius = "5px";
  tooltip.style.pointerEvents = "none";
  tooltip.style.fontSize = "14px";
  tooltip.style.display = "none";
  tooltip.style.zIndex = "9999";

  document.body.appendChild(
    tooltip
  );

  territorios.forEach(pais => {

    pais.addEventListener(
      "mouseenter",
      () => {

        tooltip.style.display =
          "block";

        tooltip.textContent =
          pais.id;

      }
    );

    pais.addEventListener(
      "mousemove",
      (e) => {

        tooltip.style.left =
          e.clientX + 15 + "px";

        tooltip.style.top =
          e.clientY + 15 + "px";

      }
    );

    pais.addEventListener(
      "mouseleave",
      () => {

        tooltip.style.display =
          "none";

      }
    );

  });

}