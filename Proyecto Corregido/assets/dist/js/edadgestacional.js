function calcularEdadGestacional() {
    var fum = document.getElementById("fum").value;

    if (fum === "") {
        alert("Por favor, ingresa la fecha de última menstruación.");
        return;
    }

    var fechaFUM = new Date(fum);
    var fechaActual = new Date();

    var diferenciaEnMilisegundos = fechaActual.getTime() - fechaFUM.getTime();
    var diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    var edadGestacionalSemanas = Math.floor(diferenciaEnDias / 7);

    if (edadGestacionalSemanas < 0) {
        document.getElementById("resultado").innerHTML = "<span class='alerta'>La fecha de última menstruación no puede ser futura.</span>";
    } else {
        document.getElementById("resultado").innerHTML = 
            "La edad gestacional es de <span style='color:#f44336; font-weight:bold;'>" + 
            edadGestacionalSemanas + "</span> semanas.";
        document.getElementById("resultado").style.color = "#ec407a"; // Mismo color que el botón
    }

    // Ocultar el botón de calcular y mostrar el de volver a calcular
    document.getElementById("calcularBtn").style.display = "none";
    document.getElementById("volverBtn").style.display = "inline-block";
}

function volverACalcular() {
    // Limpiar el campo de entrada y el resultado
    document.getElementById("fum").value = "";
    document.getElementById("resultado").innerHTML = "";

    // Mostrar el botón de calcular y ocultar el de volver a calcular
    document.getElementById("calcularBtn").style.display = "inline-block";
    document.getElementById("volverBtn").style.display = "none";
}