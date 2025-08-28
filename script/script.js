function calcular() {
  const areaInput = document.getElementById("area");
  const resultado = document.getElementById("resultado");
  const area = parseFloat(areaInput.value);

  if (!area || area <= 0) {
    resultado.style.display = "block";
    resultado.innerHTML = '<p style="text-align:center; color: var(--red);">Por favor ingresa un valor válido</p>';
    return;
  }

  const planchas = (area / 3).toFixed(1);
  const tornillos = Math.ceil(area * 15);
  const primarios = Math.ceil(area * 0.5);
  const secundarios = Math.ceil(area * 1.0);
  const romeral = (area * 0.8).toFixed(1);
  const empaste = (area * 0.5).toFixed(1);
  const cinta = (area * 1.2).toFixed(1);
  const pintura = (area / 10).toFixed(1);

  resultado.style.display = "block";
  resultado.innerHTML = `
    <h3>Para ${area} m² necesitas</h3>
    <ul class="result-list">
      <li class="result-item"><span>Planchas:</span><strong>${planchas} u</strong></li>
      <li class="result-item"><span>Tornillos:</span><strong>${tornillos} u</strong></li>
      <li class="result-item"><span>Primarios:</span><strong>${primarios} u</strong></li>
      <li class="result-item"><span>Secundarios:</span><strong>${secundarios} u</strong></li>
      <li class="result-item"><span>Romeral:</span><strong>${romeral} kg</strong></li>
      <li class="result-item"><span>Empaste:</span><strong>${empaste} kg</strong></li>
      <li class="result-item"><span>Cinta malla:</span><strong>${cinta} m</strong></li>
      <li class="result-item"><span>Pintura:</span><strong>${pintura} gal</strong></li>
    </ul>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const areaInput = document.getElementById("area");
  const btn = document.getElementById("btn-calcular");

  if (btn) btn.addEventListener("click", calcular);
  if (areaInput) {
    areaInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") calcular();
    });
  }
});
