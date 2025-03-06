function calcularDosisMedicamento() {
    var peso = document.getElementById("peso").value;
    var concentracion = document.getElementById("concentracion").value;
    var dosisRecomendada = document.getElementById("dosis").value;
    var mensajeError = document.getElementById("mensajeError");
    var resultado = document.getElementById("resultado");

    mensajeError.innerHTML = "";
    resultado.innerHTML = "";

    if (peso === "" || concentracion === "" || dosisRecomendada === "") {
        mensajeError.innerHTML = "Por favor, ingresa todos los valores.";
        return;
    }

    peso = parseFloat(peso);
    concentracion = parseFloat(concentracion);
    dosisRecomendada = parseFloat(dosisRecomendada);

    var dosisTotal = peso * dosisRecomendada;
    var volumen = dosisTotal / concentracion;

    var resultadoTexto = "La dosis total del medicamento es de <span class='numero-rojo'>" + dosisTotal.toFixed(2) + "</span> <span class='numero-rojo'>mg</span> y el volumen a administrar es de <span class='numero-rojo'>" + volumen.toFixed(2) + "</span> <span class='numero-rojo'>ml</span>.";

    resultado.innerHTML = resultadoTexto;
}

function GuardarDosisMedicamento(){
	var peso = document.getElementById("peso").value;
    var concentracion = document.getElementById("concentracion").value;
    var dosisRecomendada = document.getElementById("dosis").value;
    var mensajeError = document.getElementById("mensajeError");
    var resultado = document.getElementById("resultado");

    mensajeError.innerHTML = "";
    resultado.innerHTML = "";

    if (peso === "" || concentracion === "" || dosisRecomendada === "") {
        mensajeError.innerHTML = "Por favor, ingresa todos los valores.";
        return;
    }

    peso = parseFloat(peso);
    concentracion = parseFloat(concentracion);
    dosisRecomendada = parseFloat(dosisRecomendada);

    var dosisTotal = peso * dosisRecomendada;
    var volumen = dosisTotal / concentracion;

    var resultadoTexto = "La dosis total del medicamento es de <span class='numero-rojo'>" + dosisTotal.toFixed(2) + "</span> <span class='numero-rojo'>mg</span> y el volumen a administrar es de <span class='numero-rojo'>" + volumen.toFixed(2) + "</span> <span class='numero-rojo'>ml</span>.";

    resultado.innerHTML = resultadoTexto;

    // Enviar datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/guardar_mostrar_dosismedicamentos.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log(xhr.responseText); // Opcional: muestra la respuesta del servidor
        } else {
            console.error("Error al guardar datos.");
        }
    };
    xhr.onerror = function() {
        console.error("Error de red al guardar datos.");
    };
    var params = "peso=" + peso + "&concentracion=" + concentracion + "&dosisRecomendada=" + dosisRecomendada + "&dosisTotal=" + dosisTotal.toFixed(2) + "&volumen=" + volumen.toFixed(2);
    xhr.send(params);
	verHistorialDosisMedicamento();
}


function verHistorialDosisMedicamento() {
    var historialContainer = document.getElementById("historialContainer");
    var historialDiv = document.getElementById("historial");
    historialDiv.innerHTML = ""; // Limpiar el historial anterior

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../api/guardar_mostrar_dosismedicamentos.php", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var historialDatos = JSON.parse(xhr.responseText);
            historialDatos.forEach((item) => {
                var nuevoRegistro = document.createElement("div");
                nuevoRegistro.classList.add("history-item");
                nuevoRegistro.innerHTML = `
                    <p>📌 <b>Registro ${item.id}:</b></p>
                    <p>⚖️ <b>Peso:</b> ${item.peso} kg</p>
                    <p>💊 <b>Concentración:</b> ${item.concentracion} mg/ml</p>
                    <p>📐 <b>Dosis recomendada:</b> ${item.dosisRecomendada} mg/kg</p>
                    <p>🔥 <b>Dosis total:</b> ${item.dosisTotal} mg</p>
                    <p>💧 <b>Volumen:</b> ${item.volumen} ml</p>
                    <p>📅 <b>Fecha:</b> ${item.fecha}</p>`; // Mostrar la fecha
                historialDiv.appendChild(nuevoRegistro);
            });
            historialContainer.style.display = "block";
        } else {
            console.error("Error al obtener el historial.");
        }
    };
    xhr.onerror = function() {
        console.error("Error de red al obtener el historial.");
    };
    xhr.send();
}

function cerrarHistorialDosisMedicamento() {
    document.getElementById("historialContainer").style.display = "none";
}
