function clasificarPresionArterial() {
    var sistolica = parseInt(document.getElementById("sistolica").value);
    var diastolica = parseInt(document.getElementById("diastolica").value);

    var clasificacion;
    if (sistolica < 120 && diastolica < 80) {
        clasificacion = "✅ Normal";
    } else if (sistolica < 130 && diastolica < 80) {
        clasificacion = "⚠️ Elevada";
    } else if (sistolica < 140 && diastolica < 90) {
        clasificacion = "⚠️ Hipertensión Etapa 1";
    } else if (sistolica >= 140 && diastolica >= 90) {
        clasificacion = "❗ Hipertensión Etapa 2";
    } else {
        clasificacion = "🚨 Crisis Hipertensiva - Busca atención médica urgente";
    }

    document.getElementById("resultado").innerHTML = "📌 Tu presión arterial se clasifica como: <strong>" + clasificacion + "</strong>";

    // Ocultar el botón de Calcular y mostrar el de Volver a Calcular
    document.getElementById("calcularBtn").style.display = "none";
    document.getElementById("volverBtn").style.display = "inline-block";
}

function volverACalcular() {
    // Restablecer los valores de los campos y el resultado
    document.getElementById("sistolica").value = "";
    document.getElementById("diastolica").value = "";
    document.getElementById("resultado").innerHTML = "";

    // Mostrar el botón de Calcular y ocultar el de Volver a Calcular
    document.getElementById("calcularBtn").style.display = "inline-block";
    document.getElementById("volverBtn").style.display = "none";
}