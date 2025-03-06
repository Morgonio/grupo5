function calcularDiasFertiles() {
    var fum = document.getElementById("fum").value;
    var ciclo = parseInt(document.getElementById("ciclo").value);

    if (fum === "" || isNaN(ciclo) || ciclo <= 0) {
        alert("⚠️ Ingresa datos válidos.");
        return;
    }

    var fechaFUM = new Date(fum);
    var diaOvulacion = new Date(fechaFUM.getTime() + (ciclo - 14) * 24 * 60 * 60 * 1000);
    var diasFertilesInicio = new Date(diaOvulacion.getTime() - 2 * 24 * 60 * 60 * 1000);
    var diasFertilesFin = new Date(diaOvulacion.getTime() + 2 * 24 * 60 * 60 * 1000);

    document.getElementById("resultado").innerHTML = `📆 Tus días fértiles son del <strong>${diasFertilesInicio.toLocaleDateString()}</strong> al <strong>${diasFertilesFin.toLocaleDateString()}</strong>.`;
/*
    // Enviar datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/diasfertiles_guardar_mostrar.php", true);
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
    var params = "fum=" + fum + "&ciclo=" + ciclo + "&inicioFertiles=" + diasFertilesInicio.toISOString().split('T')[0] + "&finFertiles=" + diasFertilesFin.toISOString().split('T')[0];
    xhr.send(params);
*/
}

function GuardarDiasFertiles(){
	var fum = document.getElementById("fum").value;
    var ciclo = parseInt(document.getElementById("ciclo").value);

    if (fum === "" || isNaN(ciclo) || ciclo <= 0) {
        alert("⚠️ Ingresa datos válidos.");
        return;
    }

    var fechaFUM = new Date(fum);
    var diaOvulacion = new Date(fechaFUM.getTime() + (ciclo - 14) * 24 * 60 * 60 * 1000);
    var diasFertilesInicio = new Date(diaOvulacion.getTime() - 2 * 24 * 60 * 60 * 1000);
    var diasFertilesFin = new Date(diaOvulacion.getTime() + 2 * 24 * 60 * 60 * 1000);

    // Enviar datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/diasfertiles_guardar_mostrar.php", true);
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
    var params = "fum=" + fum + "&ciclo=" + ciclo + "&inicioFertiles=" + diasFertilesInicio.toISOString().split('T')[0] + "&finFertiles=" + diasFertilesFin.toISOString().split('T')[0];
    xhr.send(params);
	
    mostrarHistorialDiasFertiles();
}


function volverACalcularDiasFertiles() {
    document.getElementById("fum").value = "";
    document.getElementById("ciclo").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function mostrarHistorialDiasFertiles() {
    var historialDiv = document.getElementById("historial");
    historialDiv.innerHTML = "";
    document.getElementById("historialContainerDiasFertiles").style.display = "block";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../api/diasfertiles_guardar_mostrar.php", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var historialDatos = JSON.parse(xhr.responseText);
            historialDatos.forEach((item, index) => {
                var nuevoRegistro = document.createElement("div");
                nuevoRegistro.classList.add("history-item");
                nuevoRegistro.innerHTML = `<p><b>Registro ${index + 1}</b></p>
                                            <p>📅 FUM: ${item.fum}</p>
                                            <p>🔄 Ciclo: ${item.ciclo} días</p>
                                            <p>📆 Días fértiles: ${new Date(item.inicioFertiles).toLocaleDateString()} - ${new Date(item.finFertiles).toLocaleDateString()}</p>
                                            <p>📅 Fecha de Calculo: ${new Date(item.fechaCalculo).toLocaleDateString()}</p>`;
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

function cerrarHistorialDiasFertiles() {
    document.getElementById("historialContainerDiasFertiles").style.display = "none";
}
