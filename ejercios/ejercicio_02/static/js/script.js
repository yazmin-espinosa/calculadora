function sumar(numero1, numero2){
    return numero1 + numero2;
}

function restar(numero1, numero2){
    return numero1 - numero2;
}

function dividir(numero1, numero2){
    return numero1 / numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}


// --- NUEVA PARTE: CONECTAR CON EL HTML ---

// 1. Selecciona las cajas de texto
const inputNum1 = document.getElementById("numero_1");
const inputNum2 = document.getElementById("numero_2");
const inputResultado = document.getElementById("resultado");

// 2. Selecciona lo botones por ID
const btnSumar = document.getElementById("mi_boton");
const btnRestar = document.getElementById("mi_boton2");
const btnDividir = document.getElementById("mi_boton3");
const btnMultiplicar = document.getElementById("mi_boton4");


// 3. Función onclick a cada botón
btnSumar.onclick = function() {
    // Tomamos los valores de los inputs y los convertimos a números reales con Number()
    const n1 = Number(inputNum1.value);
    const n2 = Number(inputNum2.value);
    
    // Ejecutamos tu función y guardamos el resultado en la caja correspondiente
    inputResultado.value = sumar(n1, n2);
};

btnRestar.onclick = function() {
    const n1 = Number(inputNum1.value);
    const n2 = Number(inputNum2.value);
    inputResultado.value = restar(n1, n2);
};

btnDividir.onclick = function() {
    const n1 = Number(inputNum1.value);
    const n2 = Number(inputNum2.value);
    inputResultado.value = dividir(n1, n2);
};

btnMultiplicar.onclick = function() {
    const n1 = Number(inputNum1.value);
    const n2 = Number(inputNum2.value);
    inputResultado.value = multiplicar(n1, n2);
};