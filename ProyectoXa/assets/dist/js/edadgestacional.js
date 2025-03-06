<script>
    function CalcularEdadGestacional() {
        var fum = document.getElementById("fum").value;

        if (fum === "") {
            document.getElementById("resultado").innerHTML = "<span class='numero-rojo'>Por favor, ingresa la fecha de última menstruación.</span>";
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
                "La edad gestacional es de <span class='numero-rojo'>" +
                edadGestacionalSemanas + "</span> semanas.";
        }

        // Guardar el resultado en la base de datos
        guardarResultado(fum, edadGestacionalSemanas);

        // Ocultar el botón de calcular y mostrar el de volver a calcular
        document.getElementById("calcularBtn").style.display = "none";
        document.getElementById("volverBtn").style.display = "inline-block";
    }

    function guardarResultado(fum, edadGestacionalSemanas) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "../api/edadGestal_guardar_mostrar.php", true);
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
        var params = "fum=" + fum + "&edadGestacionalSemanas=" + edadGestacionalSemanas;
        xhr.send(params);
    }

    function ReiniciarFormularioEdadGestacional() {
        // Limpiar el campo de entrada y el resultado
        document.getElementById("fum").value = "";
        document.getElementById("resultado").innerHTML = "";

        // Mostrar el botón de calcular y ocultar el de volver a calcular
        document.getElementById("calcularBtn").style.display = "inline-block";
        document.getElementById("volverBtn").style.display = "none";
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
        xhr.open("GET", "../api/edadGestal_guardar_mostrar.php", true);
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
                            <p>FUM: ${item.fum}</p>
                            <p>Edad Gestacional: ${item.edadGestacionalSemanas} semanas</p>
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
</script>


