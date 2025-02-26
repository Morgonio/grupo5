function clasificarPresionArterial() {
    var sistolica = document.getElementById("sistolica").value;
    var diastolica = document.getElementById("diastolica").value;

    if (sistolica === "" || diastolica === "") {
        document.getElementById("resultado").innerHTML = "⚠️ Ingresa ambos valores antes de calcular.";
        return;
    }

    sistolica = parseInt(sistolica);
    diastolica = parseInt(diastolica);

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

    document.getElementById("calcularBtn").style.display = "none";
    document.getElementById("volverBtn").style.display = "inline-block";
}

function volverACalcular() {
    document.getElementById("sistolica").value = "";
    document.getElementById("diastolica").value = "";
    document.getElementById("resultado").innerHTML = "";

    document.getElementById("calcularBtn").style.display = "inline-block";
    document.getElementById("volverBtn").style.display = "none";
}
