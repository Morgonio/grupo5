document.addEventListener("DOMContentLoaded", function() {
    // Asegurarse de que los campos están vacíos al inicio
    document.getElementById("fum").value = "";
    document.getElementById("ciclo").value = "";
});

function CalcularDiasFertiles() {
    var fum = document.getElementById("fum").value;
    var ciclo = parseInt(document.getElementById("ciclo").value);
    var errorMessage = document.getElementById("error-message");

    // Ocultar mensaje de error previo
    errorMessage.style.display = "none";

    // Validar si los campos están vacíos o son inválidos
    if (fum === "" || isNaN(ciclo) || ciclo <= 0) {
        errorMessage.textContent = "⚠️ Por favor, ingresa correctamente la fecha de última menstruación y la duración del ciclo menstrual.";
        errorMessage.style.display = "block";
        return;
    }

    var fechaFUM = new Date(fum);
    var diaOvulacion = new Date(fechaFUM.getTime() + (ciclo - 14) * 24 * 60 * 60 * 1000);
    var diasFertilesInicio = new Date(diaOvulacion.getTime() - 2 * 24 * 60 * 60 * 1000);
    var diasFertilesFin = new Date(diaOvulacion.getTime() + 2 * 24 * 60 * 60 * 1000);

    var resultado = "📆 Tus días fértiles son del <strong>" + diasFertilesInicio.toLocaleDateString() + "</strong> al <strong>" + diasFertilesFin.toLocaleDateString() + "</strong>.";
    document.getElementById("resultado").innerHTML = resultado;

    // Ocultar botón Calcular y mostrar el botón Volver a Calcular
    document.getElementById("calcularBtn").style.display = "none";
    document.getElementById("volverBtn").style.display = "inline-block";
}

function ReiniciarFormularioDiasFertiles() {
    // Restablecer los campos y ocultar el resultado
    document.getElementById("fum").value = "";
    document.getElementById("ciclo").value = "";
    document.getElementById("resultado").innerHTML = "";

    // Mostrar el botón Calcular y ocultar el botón Volver a Calcular
    document.getElementById("calcularBtn").style.display = "inline-block";
    document.getElementById("volverBtn").style.display = "none";
}
