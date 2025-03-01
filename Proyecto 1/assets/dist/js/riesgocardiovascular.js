function calcularRiesgoCardiovascular() {
    var edad = parseInt(document.getElementById("edad").value);
    var sexo = document.getElementById("sexo").value;
    var fumador = document.getElementById("fumador").value;
    var colesterol = parseInt(document.getElementById("colesterol").value);
    var hdl = parseInt(document.getElementById("hdl").value);
    var presion = parseInt(document.getElementById("presion").value);

    // Aquí puedes implementar el cálculo del riesgo cardiovascular utilizando la información ingresada.
    // Este es solo un ejemplo básico y no incluye un cálculo real del riesgo.
    
    if (isNaN(edad) || isNaN(colesterol) || isNaN(hdl) || isNaN(presion)) {
        alert("Por favor, ingresa todos los campos correctamente.");
        return;
    }

    // Cálculo de riesgo cardiovascular (simplificado y no exacto)
    var riesgo = 0;
    
    if (sexo === "masculino") {
        riesgo += 0.2;
    }
    if (fumador === "si") {
        riesgo += 0.3;
    }
    if (colesterol > 240) {
        riesgo += 0.5;
    }
    if (hdl < 40) {
        riesgo += 0.4;
    }
    if (presion > 140) {
        riesgo += 0.3;
    }

    var mensaje = "";
    if (riesgo < 1) {
        mensaje = "Riesgo bajo de enfermedad cardiovascular.";
    } else if (riesgo < 2) {
        mensaje = "Riesgo moderado de enfermedad cardiovascular.";
    } else {
        mensaje = "Riesgo alto de enfermedad cardiovascular.";
    }

    document.getElementById("resultado").innerHTML = mensaje;
}