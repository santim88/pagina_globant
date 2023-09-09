/* document.getElementById("nuevaPartida").addEventListener("click", iniciarNuevaPartida); */
document.getElementById("nuevaPartida").addEventListener("click", iniciarNuevaPartida)
document.getElementById("tablaPuntajes").addEventListener("click", verTablaPuntajes);
document.getElementById("salir").addEventListener("click", salir);

function iniciarNuevaPartida() {
       var gameBoardHTML = `
      <!-- Casillas del juego -->
      <div id="inicioPartida"e>
        <h2>Ingresa los nombres de los jugadores:</h2>
        <label for="jugador1">Jugador 1:</label>
        <input type="text" id="jugador1" placeholder="Nombre del Jugador 1">
        <br>
        <label for="jugador2">Jugador 2:</label>
        <input type="text" id="jugador2" placeholder="Nombre del Jugador 2">
        <br>
        <button id="comenzarPartida">Comenzar Partida</button>
    </div>
    `;
    // Set the innerHTML of the "tablero" element to the game board HTML
    document.getElementById("tablero").innerHTML = gameBoardHTML;
		document.getElementById("comenzarPartida").addEventListener("click", comenzarPartida);
}

function comenzarPartida() {
    var gameBoardHTML = `
      <!-- Casillas del juego -->
      <div class="casilla" id="c11"></div>
      <div class="casilla" id="c12"></div>
      <div class="casilla" id="c13"></div>
      <div class="casilla" id="c21"></div>
      <div class="casilla" id="c22"></div>
      <div class="casilla" id="c23"></div>
      <div class="casilla" id="c31"></div>
      <div class="casilla" id="c32"></div>
      <div class="casilla" id="c33"></div>
    `;
    // Set the innerHTML of the "tablero" element to the game board HTML
    document.getElementById("tablero2").innerHTML = gameBoardHTML;
}

function verTablaPuntajes() {
            alert("prueba 1.");
}
function salir() {
          alert("prueba 2.");
}


