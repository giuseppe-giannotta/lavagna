const element = document.getElementById("myBtn");
element.addEventListener("click", function () {
  const ragazzi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Funzione che estrae un numero casuale dall'array e lo rimuove
  function estraiNumero(array, lastNumber) {
    let numeroEstratto;
    do {
      const randomIndex = Math.floor(Math.random() * array.length);
      numeroEstratto = array[randomIndex];
    } while (numeroEstratto === lastNumber); // Evita l'estrazione consecutiva dello stesso numero
    array.splice(array.indexOf(numeroEstratto), 1); // Rimuove il numero estratto
    return numeroEstratto;
  }
  document.querySelector(".img13").setAttribute("src", "./images/dice13.png");
  // Estrai i numeri e assegna le immagini casualmente
  let i = 1;
  let lastNumber = null;
  while (ragazzi.length > 0) {
    const numeroEstratto = estraiNumero(ragazzi, lastNumber); // Estrae un numero casuale diverso dal precedente
    console.log(`Assegno ${numeroEstratto} all'immagine img${i}`);

    document
      .querySelector(".img" + i)
      .setAttribute("src", "./images/dice" + numeroEstratto + ".png"); // Assegna l'immagine casuale

    lastNumber = numeroEstratto; // Aggiorna il numero precedente
    i++;
  }
});

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
