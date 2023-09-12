
document.getElementById("nuevaPartida").addEventListener("click", iniciarNuevaPartida)
document.getElementById("tablaPuntajes").addEventListener("click", verTablaPuntajes);
document.getElementById("salir").addEventListener("click", salir);

function iniciarNuevaPartida() {
        let gameBoardHTML = `
        <!-- Casillas del juego -->
         <div id="inicioPartida">
        <h2 id="textId">Ingresa los nombres de los jugadores:</h2>
        <h3 id="textId2">El  jugador 1 toma el valor de X y jugador 2 de O</h2>
        <label for="jugador1">Jugador 1:</label>
        <input type="text" id="jugador1" placeholder="Nombre del Jugador 1">
        <input name="intereses" id="statePlayer1" type="radio" value="true" checked="checked" />
        <label for="statePlayer2">First Pick</label>
        <br>
        <label for="jugador2">Jugador 2:</label>
        <input type="text" id="jugador2" placeholder="Nombre del Jugador 2">
        <input name="intereses" id="statePlayer2" type="radio" value="true"  checked="checked" />
        <label for="statePlayer2">First Pick</label>
        <br>
        <button id="comenzarPartida" disabled>Comenzar Partida</button>
    </div>
    `;
   
    document.getElementById("tablero").innerHTML = gameBoardHTML;
    //Observar enventos
    document.getElementById("jugador1").addEventListener("input", checkInputs);
    document.getElementById("jugador2").addEventListener("input", checkInputs);
    document.getElementById("comenzarPartida").addEventListener("click", comenzarPartida);
 
}

function checkInputs() {
    let jugador1Input = document.getElementById("jugador1").value;
    let jugador2Input = document.getElementById("jugador2").value;
    let comenzarPartidaButton = document.getElementById("comenzarPartida");

    if (jugador1Input.trim() !== "" && jugador2Input.trim() !== "") {
        comenzarPartidaButton.removeAttribute("disabled");
    } else {
        comenzarPartidaButton.setAttribute("disabled", "disabled");
    }
}

let turno = true // true para X, false para O

function comenzarPartida() {
    let selectPlayer1= document.getElementById('statePlayer1');
    let selectPlayer2= document.getElementById('statePlayer2');
    let textElement = document.getElementById('textId');
  
    if(selectPlayer1.checked){
      turno= true;
      //textElement.textContent= `hola mor ${turno}`;
      console.log(turno);
    }else{
       turno= false;
       console.log(turno);
    }

  
    let gameBoardHTML = `
    <!-- Casillas del juego -->
    <div class="casilla" id="c11" onclick="marcarCasilla(this); savePosition(0)"></div>
    <div class="casilla" id="c12" onclick="marcarCasilla(this); savePosition(1)"></div>
    <div class="casilla" id="c13" onclick="marcarCasilla(this); savePosition(2)"></div>
    <div class="casilla" id="c21" onclick="marcarCasilla(this); savePosition(3)"></div>
    <div class="casilla" id="c22" onclick="marcarCasilla(this); savePosition(4)"></div>
    <div class="casilla" id="c23" onclick="marcarCasilla(this); savePosition(5)"></div>
    <div class="casilla" id="c31" onclick="marcarCasilla(this); savePosition(6)"></div>
    <div class="casilla" id="c32" onclick="marcarCasilla(this); savePosition(7)"></div>
    <div class="casilla" id="c33" onclick="marcarCasilla(this); savePosition(8)"></div>
    `;
    // Set the innerHTML of the "tablero2" element to the game board HTML
    document.getElementById("tablero2").innerHTML = gameBoardHTML;
}

function marcarCasilla(casilla) {
    if (casilla.innerHTML.trim() == "") { // Verifica que la casilla esté vacía
        if (turno) {
            casilla.innerHTML = "X";
        } else {
            casilla.innerHTML = "O";
        }
        turno = !turno; // Cambia el turno
    }
   //validar si alguien ha ganado
}


let arrayX=[];
let arrayO=[];
let c=0
function savePosition(positionArray){
  let textElementWinner = document.getElementById('textGanador');
  if (!turno) {//Nota: funciona pero corregir porque funcioan
    arrayX.push(positionArray);
  } else {
    arrayO.push(positionArray);
  }
  c=c+1;
  console.log(`hola ${arrayX} matrix x`);
  console.log(`hola ${arrayO} matrix o`);
  
  if(isWinner(arrayX)){ 
    console.log("eres el ganador X");
    textElementWinner.textContent= "Ganador: jugador 1";
  }
  
  else if(isWinner(arrayO)){ 
    console.log("eres el ganador O");
    textElementWinner.textContent= "Ganador: jugador 2";
  }
  
}

const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function isWinner(matriz) {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        let combinacion = combinacionesGanadoras[i];
        if (combinacion.every(elemento => matriz.includes(elemento))) {
            return true;
        }
    }
    return false;
}

function verTablaPuntajes() {
            alert("prueba 1.");
}
function salir() {
          alert("prueba 2.");
}


