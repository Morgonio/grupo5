function calcularGrasaCorporal() {
    var edad = parseInt(document.getElementById("edad").value);
    var sexo = document.getElementById("sexo").value;
    var altura = parseInt(document.getElementById("altura").value);
    var cintura = parseInt(document.getElementById("cintura").value);
    var cuello = parseInt(document.getElementById("cuello").value);
    var cadera = parseInt(document.getElementById("cadera").value);

    if (isNaN(edad) || isNaN(altura) || isNaN(cintura) || isNaN(cuello) || isNaN(cadera) ||
        edad <= 0 || altura <= 0 || cintura <= 0 || cuello <= 0 || cadera <= 0) {
        alert("⚠️ Por favor, ingresa valores numéricos válidos.");
        return;
    }

    var porcentajeGrasa;
    if (sexo === "masculino") {
        porcentajeGrasa = 86.010 * Math.log10(cintura - cuello) - 70.041 * Math.log10(altura) + 36.76;
    } else {
        porcentajeGrasa = 163.205 * Math.log10(cintura + cadera - cuello) - 97.152 * Math.log10(altura) - 78.387;
    }

    document.getElementById("resultado").innerHTML = "📊 Tu porcentaje de grasa corporal es de <strong>" + porcentajeGrasa.toFixed(2) + "%</strong>.";
    document.getElementById("calcularButton").style.display = "none";
    document.getElementById("volverButton").style.display = "inline-block";
}

function volverACalcular() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("edad").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("cintura").value = "";
    document.getElementById("cuello").value = "";
    document.getElementById("cadera").value = "";
    document.getElementById("sexo").value = "masculino";
    document.getElementById("calcularButton").style.display = "inline-block";
    document.getElementById("volverButton").style.display = "none";
}