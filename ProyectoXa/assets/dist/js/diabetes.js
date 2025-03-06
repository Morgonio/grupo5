
function calcularRiesgoDiabetes() {
    var edad = parseInt(document.getElementById("edad").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var antecedentes = document.getElementById("antecedentes").value;

    if (isNaN(edad) || isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0 || edad <= 0) {
        document.getElementById("resultado").innerHTML = "<span style='color: red;'>⚠️ Ingrese valores válidos.</span>";
        return;
    }

    var imc = peso / (altura * altura);
    var riesgo = 0;

    if (edad >= 45) riesgo += 2;
    if (imc >= 25) riesgo += 3;
    if (antecedentes === "si") riesgo += 5;

    var mensaje = "";
    if (riesgo >= 6) {
        mensaje = "⚠️ Alto riesgo de diabetes. Consulte a un médico.";
    } else if (riesgo >= 3) {
        mensaje = "🔹 Riesgo moderado. Mantenga hábitos saludables.";
    } else {
        mensaje = "✅ Bajo riesgo. Siga cuidando su salud.";
    }
	

    document.getElementById("resultado").innerHTML = ` Tu riesgo de diabetes es: <b>${riesgo}</b>.<br>${mensaje}`;
}

function GuardarDiabetes(){
	var edad = parseInt(document.getElementById("edad").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var antecedentes = document.getElementById("antecedentes").value;

    if (isNaN(edad) || isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0 || edad <= 0) {
        document.getElementById("resultado").innerHTML = "<span style='color: red;'>⚠️ Ingrese valores válidos.</span>";
        return;
    }

    var imc = peso / (altura * altura);
    var riesgo = 0;

    if (edad >= 45) riesgo += 2;
    if (imc >= 25) riesgo += 3;
    if (antecedentes === "si") riesgo += 5;

    var mensaje = "";
    if (riesgo >= 6) {
        mensaje = "⚠️ Alto riesgo de diabetes. Consulte a un médico.";
    } else if (riesgo >= 3) {
        mensaje = "🔹 Riesgo moderado. Mantenga hábitos saludables.";
    } else {
        mensaje = "✅ Bajo riesgo. Siga cuidando su salud.";
    }
    // Enviar datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/diabetes_guardar_mostrar.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log(xhr.responseText);
        } else {
            console.error("Error al guardar datos.");
        }
    };
    xhr.onerror = function() {
        console.error("Error de red al guardar datos.");
    };
    var params = "edad=" + edad + "&peso=" + peso + "&altura=" + altura + "&antecedentes=" + antecedentes + "&riesgo=" + riesgo + "&resultado=" + mensaje;
    xhr.send(params);
	
	mostrarHistorialDiabetes();
}

function mostrarHistorialDiabetes() {
    var historialDiv = document.getElementById("historial");
    document.getElementById("historialContainer").style.display = "block";
    historialDiv.innerHTML = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../api/diabetes_guardar_mostrar.php", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var historialDatos = JSON.parse(xhr.responseText);
            historialDatos.forEach((item) => {
                var nuevoRegistro = document.createElement("div");
                nuevoRegistro.classList.add("history-item");
                nuevoRegistro.innerHTML = `
                    <p>📌 <b>Registro ${item.id}:</b></p>
                    <p>📅 <b>Edad:</b> ${item.edad} años</p>
                    <p>⚖️ <b>Peso:</b> ${item.peso} kg</p>
                    <p>📏 <b>Altura:</b> ${item.altura} m</p>
                    <p>🧬 <b>Antecedentes:</b> ${item.antecedentes}</p>
                    <p>📊 <b>Riesgo:</b> ${item.riesgo}</p>
                    <p>🩺 <b>Resultado:</b> ${item.resultado}</p>
                    <p>📅 <b>Fecha:</b> ${item.fecha}</p>`;
                historialDiv.appendChild(nuevoRegistro);
            });
        } else {
            console.error("Error al obtener el historial.");
        }
    };
    xhr.onerror = function() {
        console.error("Error de red al obtener el historial.");
    };
    xhr.send();
}

function cerrarHistorialDiabetes() {
    document.getElementById("historialContainer").style.display = "none";
}
