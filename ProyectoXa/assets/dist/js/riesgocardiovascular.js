function calcularRiesgoCardiovascular() {
        var edad = parseInt(document.getElementById("edad").value);
        var sexo = document.getElementById("sexo").value;
        var fumador = document.getElementById("fumador").value;
        var colesterol = parseInt(document.getElementById("colesterol").value);
        var hdl = parseInt(document.getElementById("hdl").value);
        var presion = parseInt(document.getElementById("presion").value);

        if (isNaN(edad) || isNaN(colesterol) || isNaN(hdl) || isNaN(presion)) {
            document.getElementById("resultado").innerHTML = "Por favor, ingresa valores válidos en todos los campos.";
            return;
        }

        var puntos = 0;
        puntos += (sexo === "masculino" ? (edad - 20) * 0.3 : (edad - 20) * 0.2);
        puntos += (colesterol > 200) ? ((colesterol - 200) / 10) * 1.5 : 0;
        puntos -= (hdl > 50) ? ((hdl - 50) / 5) * 1.0 : 0;
        puntos += (presion > 120) ? ((presion - 120) / 10) * 1.8 : 0;
        puntos += (fumador === "si") ? 3 : 0;

        var mensaje;
        if (puntos < 5) {
            mensaje = "Bajo riesgo cardiovascular.";
        } else if (puntos < 10) {
            mensaje = "Riesgo moderado.";
        } else {
            mensaje = "Alto riesgo cardiovascular. Consulta a un médico.";
        }

        document.getElementById("resultado").innerHTML = mensaje;

    }
	/////////////
	function GuardarRiesCar() {
        var edad = parseInt(document.getElementById("edad").value);
        var sexo = document.getElementById("sexo").value;
        var fumador = document.getElementById("fumador").value;
        var colesterol = parseInt(document.getElementById("colesterol").value);
        var hdl = parseInt(document.getElementById("hdl").value);
        var presion = parseInt(document.getElementById("presion").value);

        if (isNaN(edad) || isNaN(colesterol) || isNaN(hdl) || isNaN(presion)) {
            document.getElementById("resultado").innerHTML = "Por favor, ingresa valores válidos en todos los campos.";
            return;
        }

        var puntos = 0;
        puntos += (sexo === "masculino" ? (edad - 20) * 0.3 : (edad - 20) * 0.2);
        puntos += (colesterol > 200) ? ((colesterol - 200) / 10) * 1.5 : 0;
        puntos -= (hdl > 50) ? ((hdl - 50) / 5) * 1.0 : 0;
        puntos += (presion > 120) ? ((presion - 120) / 10) * 1.8 : 0;
        puntos += (fumador === "si") ? 3 : 0;

        var mensaje;
        if (puntos < 5) {
            mensaje = "Bajo riesgo cardiovascular.";
        } else if (puntos < 10) {
            mensaje = "Riesgo moderado.";
        } else {
            mensaje = "Alto riesgo cardiovascular. Consulta a un médico.";
        }

        // Guardar el resultado en la base de datos
        guardarResultado(edad, sexo, fumador, colesterol, hdl, presion, mensaje);
    }

    function guardarResultado(edad, sexo, fumador, colesterol, hdl, presion, riesgo) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "../api/riesgocardovascular_guardar_mostrar.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                console.log(xhr.responseText);
                // Actualizar el historial después de guardar
                actualizarHistorial();
            } else {
                console.error("Error al guardar datos.");
            }
        };
        xhr.onerror = function() {
            console.error("Error de red al guardar datos.");
        };
        var params = "edad=" + edad + "&sexo=" + sexo + "&fumador=" + fumador + "&colesterol=" + colesterol + "&hdl=" + hdl + "&presion=" + presion + "&riesgo=" + riesgo;
        xhr.send(params);
    }

    function verHistorial() {
        var historialContainer = document.getElementById("historialContainer");
        historialContainer.style.display = "block";
        actualizarHistorial();
    }

    function cerrarHistorial() {
        document.getElementById("historialContainer").style.display = "none";
    }

    function actualizarHistorial() {
        var historialDiv = document.getElementById("historial");
        historialDiv.innerHTML = "";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "../api/riesgocardovascular_guardar_mostrar.php", true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var historialDatos = JSON.parse(xhr.responseText);

                // Verificar si historialDatos es un array
                if (Array.isArray(historialDatos)) {
                    historialDatos.forEach((item) => {
                        var nuevoRegistro = document.createElement("div");
                        nuevoRegistro.classList.add("history-item");
                        nuevoRegistro.innerHTML = `
                            <p><b>Registro ${item.id}:</b></p>
                            <p>Edad: ${item.edad} años</p>
                            <p>Sexo: ${item.sexo}</p>
                            <p>Fumador: ${item.fumador}</p>
                            <p>Colesterol: ${item.colesterol} mg/dl</p>
                            <p>HDL: ${item.hdl} mg/dl</p>
                            <p>Presión arterial: ${item.presion} mmHg</p>
                            <p>Riesgo: ${item.riesgo}</p>
                            <p>Fecha: ${new Date(item.fechaCalculo).toLocaleString()}</p>`; // Mostrar fecha y hora
                        historialDiv.appendChild(nuevoRegistro);
                    });
                } else {
                    // Si no es un array, mostrar un mensaje de error o manejarlo de otra manera
                    historialDiv.innerHTML = "<p>No hay registros en el historial.</p>";
                }
            } else {
                console.error("Error al obtener el historial.");
            }
        };
        xhr.onerror = function() {
            console.error("Error de red al obtener el historial.");
        };
        xhr.send();
    }

    // Llama a actualizarHistorial() al cargar la página
    window.onload = function() {
        actualizarHistorial();
    };