// VARIABLES ---------------------------------------------------------------------
let poderUser1, poderUser2, poderPiedra = `piedra`, poderPapel = `papel`, poderTijeras = `tijeras`;
let puntajeUser1 = 0, puntajeUser2 = 0, puntajeEmpate = 0;

// SELECCION DE PODERES ----------------------------------------------------------
const buttonPiedra = document.getElementById(`buttonPiedra`);
buttonPiedra.addEventListener(`click`, function(){
    poderUser1 = poderPiedra;
    poderAleatorio();
    verificarGanador()
    dibujarVS();
})
const buttonPapel = document.getElementById(`buttonPapel`);
buttonPapel.addEventListener(`click`, function(){
    poderUser1 = poderPapel;
    poderAleatorio();
    verificarGanador()
    dibujarVS();
})
const buttonTijeras = document.getElementById(`buttonTijeras`);
buttonTijeras.addEventListener(`click`, function(){
    poderUser1 = poderTijeras;
    poderAleatorio();
    verificarGanador()
    dibujarVS();
})

// DIBUJAR INICIO -----------------------------------------------------------------
dibujarInicio()

// DIBUJAR VS ---------------------------------------------------------------------
function dibujarVS(){
    switch (poderUser1) {
        case poderPiedra:
            document.getElementById("jugadaUser1").src=`sources/ppt/imagenes/piedra-izquierda.png`;
            break;
        case poderPapel:
            document.getElementById("jugadaUser1").src=`sources/ppt/imagenes/papel-izquierda.png`;
            break;
        case poderTijeras:
            document.getElementById("jugadaUser1").src=`sources/ppt/imagenes/tijeras-izquierda.png`;
            break;
        default:
            break;
    }
    switch (poderUser2) {
        case poderPiedra:
            document.getElementById("jugadaUser2").src=`sources/ppt/imagenes/piedra-derecha.png`;
            break;
        case poderPapel:
            document.getElementById("jugadaUser2").src=`sources/ppt/imagenes/papel-derecha.png`;
            break;
        case poderTijeras:
            document.getElementById("jugadaUser2").src=`sources/ppt/imagenes/tijeras-derecha.png`;
            break;
        default:
            break;
    }
    document.getElementById("puntaje").innerHTML = `
    Puntaje del User1: <strong>${puntajeUser1}</strong></br>
    Puntaje del User2: <strong>${puntajeUser2}</strong></br>
    Puntaje empate: <strong>${puntajeEmpate}</strong>
    `//"Tu Puntaje es: " + puntajeUser1 + "<br>El Puntaje de la CPU es: " + puntajeUser2 + "<br>Los Empates han sido: " + puntajeEmpate;
}

// NUMERO ALEATORIO ---------------------------------------------------------------
function numAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// PODER ALEATORIO USER2 ----------------------------------------------------------
function poderAleatorio(){
    var poderNumAleatorio = numAleatorio(1,3);
    switch (poderNumAleatorio){
        case 1:
            poderUser2 = poderPiedra;
            break;
        case 2:
            poderUser2 = poderPapel;
            break;
        case 3:
            poderUser2 = poderTijeras;
            break;
        default:
            alert("Esto no tenia que ocurrir! 😅 reportalo al admin del programa")
            break;
    }
}

// VERIFICACION GANADOR  ----------------------------------------------------------
function verificarGanador(){
    if(poderUser1 !==  poderUser2)
    {
        if(poderUser1 == poderPiedra && poderUser2 == poderTijeras || poderUser1 == poderPapel && poderUser2 == poderPiedra || poderUser1 == poderTijeras && poderUser2 == poderPapel){
            document.getElementById("ganador").innerHTML = "TU GANAS 😎";
            puntajeUser1 = puntajeUser1 + 1;
        }else{
            document.getElementById("ganador").innerHTML = "GANA LA CPU 😥";
            puntajeUser2 = puntajeUser2 + 1;
        }
    }else{
        document.getElementById("ganador").innerHTML = "EMPATE";
        puntajeEmpate = puntajeEmpate + 1;
    }
}

// DIBUJAR INICIO -----------------------------------------------------------------
function dibujarInicio(){
    document.getElementById("jugadaUser1").src=`sources/ppt/imagenes/user-1.png`;
    document.getElementById("jugadaUser2").src=`sources/ppt/imagenes/user-2.png`;
    document.getElementById("puntaje").innerHTML = `
    Puntaje del User1: <strong>${puntajeUser1}</strong></br>
    Puntaje del User2: <strong>${puntajeUser2}</strong></br>
    Puntaje empate: <strong>${puntajeEmpate}</strong>
    `//"Tu Puntaje es: " + puntajeUser1 + "<br>El Puntaje de la CPU es: " + puntajeUser2 + "<br>Los Empates han sido: " + puntajeEmpate;
}