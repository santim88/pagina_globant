/* document.getElementById("nuevaPartida").addEventListener("click", iniciarNuevaPartida); */
document.getElementById("nuevaPartida").addEventListener("click", iniciarNuevaPartida)
document.getElementById("tablaPuntajes").addEventListener("click", verTablaPuntajes);
document.getElementById("salir").addEventListener("click", salir);

function iniciarNuevaPartida() {
        var gameBoardHTML = `
    <!-- Casillas del juego -->
    <div id="inicioPartida">
        <h2>Ingresa los nombres de los jugadores:</h2>
        <label for="jugador1">Jugador 1:</label>
        <input type="text" id="jugador1" placeholder="Nombre del Jugador 1">
        <input name="intereses" id="statePlayer2" type="radio" value="rbiinternet" checked="checked" />
        <label for="statePlayer2">First Pick</label>
        <br>
        <label for="jugador2">Jugador 2:</label>
        <input type="text" id="jugador2" placeholder="Nombre del Jugador 2">
        <input name="intereses" id="statePlayer2" type="radio" value="rbiinternet" checked="checked" />
        <label for="statePlayer2">First Pick</label>
        <br>
        <button id="comenzarPartida" disabled>Comenzar Partida</button>
    </div>
    `;
    // Set the innerHTML of the "tablero" element to the game board HTML
    document.getElementById("tablero").innerHTML = gameBoardHTML;
    // Add event listeners to input fields
    document.getElementById("jugador1").addEventListener("input", checkInputs);
    document.getElementById("jugador2").addEventListener("input", checkInputs);
    document.getElementById("comenzarPartida").addEventListener("click", comenzarPartida);
}

function checkInputs() {
    var jugador1Input = document.getElementById("jugador1").value;
    var jugador2Input = document.getElementById("jugador2").value;
    var comenzarPartidaButton = document.getElementById("comenzarPartida");

    if (jugador1Input.trim() !== "" && jugador2Input.trim() !== "") {
        comenzarPartidaButton.removeAttribute("disabled");
    } else {
        comenzarPartidaButton.setAttribute("disabled", "disabled");
    }
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


