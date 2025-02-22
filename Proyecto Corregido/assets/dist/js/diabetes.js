function calcularRiesgoDiabetes() {
    var edad = parseInt(document.getElementById("edad").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var antecedentes = document.getElementById("antecedentes").value;

    // Validación de entrada
    if (isNaN(edad) || isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0 || edad <= 0) {
        document.getElementById("resultado").innerHTML = "<span class='numero-rojo'>Por favor, ingrese valores válidos.</span>";
        return;
    }

    // Cálculo del IMC y riesgo
    var imc = peso / (altura * altura);
    var riesgo = 0;

    if (edad >= 45) riesgo += 2;
    if (imc >= 25) riesgo += 3;
    if (antecedentes === "si") riesgo += 5;

    var mensaje = "";
    if (riesgo >= 6) {
        mensaje = "Alto riesgo de diabetes. Consulte a un médico.";
    } else if (riesgo >= 3) {
        mensaje = "Riesgo moderado de diabetes. Mantenga hábitos saludables.";
    } else {
        mensaje = "Bajo riesgo de diabetes. Siga cuidando su salud.";
    }

    document.getElementById("resultado").innerHTML = 
        "Tu riesgo de diabetes es: <span class='numero-rojo'>" + riesgo + "</span>.<br>" + mensaje;

    // Ocultar botón de calcular y mostrar botón de reiniciar
    document.getElementById("calcularBtn").style.display = "none";
    document.getElementById("reiniciarBtn").style.display = "block";
}

function reiniciarFormulario() {
    document.getElementById("edad").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("antecedentes").value = "si";
    document.getElementById("resultado").innerHTML = "";

    // Restaurar visibilidad de los botones
    document.getElementById("calcularBtn").style.display = "block";
    document.getElementById("reiniciarBtn").style.display = "none";
}