function clasificarPresion() {
    let sistolica = document.getElementById("sistolica").value;
    let diastolica = document.getElementById("diastolica").value;
    if (!sistolica || !diastolica) {
        document.getElementById("resultado").innerHTML = "?? Ingresa ambos valores.";
        return;
    }
    sistolica = parseInt(sistolica);
    diastolica = parseInt(diastolica);
    let clasificacion;
    if (sistolica < 120 && diastolica < 80) clasificacion = "? Normal";
    else if (sistolica < 130 && diastolica < 80) clasificacion = "?? Elevada";
    else if (sistolica < 140 && diastolica < 90) clasificacion = "?? Hipertensi��n Etapa 1";
    else if (sistolica >= 140 || diastolica >= 90) clasificacion = "? Hipertensi��n Etapa 2";
    else clasificacion = "?? Crisis Hipertensiva";

    let resultado = ` Tu Presion se clasifica como: <strong>${clasificacion}</strong>`;
    document.getElementById("resultado").innerHTML = resultado;
}
///////////
function GuardarPresion() {
    let sistolica = document.getElementById("sistolica").value;
    let diastolica = document.getElementById("diastolica").value;
    if (!sistolica || !diastolica) {
        document.getElementById("resultado").innerHTML = "?? Ingresa ambos valores.";
        return;
    }
    sistolica = parseInt(sistolica);
    diastolica = parseInt(diastolica);
    let clasificacion;
    if (sistolica < 120 && diastolica < 80) clasificacion = "? Normal";
    else if (sistolica < 130 && diastolica < 80) clasificacion = "?? Elevada";
    else if (sistolica < 140 && diastolica < 90) clasificacion = "?? Hipertensi��n Etapa 1";
    else if (sistolica >= 140 || diastolica >= 90) clasificacion = "? Hipertensi��n Etapa 2";
    else clasificacion = "?? Crisis Hipertensiva";

    let resultado = ` Tu Presion se clasifica como: <strong>${clasificacion}</strong>`;

    // Enviar datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/presionarterial_guardar_mostrar.php", true);
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
    var params = "sistolica=" + sistolica + "&diastolica=" + diastolica + "&clasificacion=" + clasificacion;
    xhr.send(params);

    actualizarHistorialPrecionArterial();
	verHistorialPrecionArterial();
}

function actualizarHistorialPrecionArterial() {
    let lista = document.getElementById("historial-lista");
    lista.innerHTML = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../api/presionarterial_guardar_mostrar.php", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var historialDatos = JSON.parse(xhr.responseText);
            if (historialDatos.length === 0) {
                lista.innerHTML = "<p id='mensaje-historial'>A��n no hay registros.</p>";
                return;
            }
            historialDatos.forEach((registro, index) => {
                lista.innerHTML += `
                    <div class='registro'>
                        <p> <strong>Registro ${index + 1}</strong></p>
                        <p> Sistolica: ${registro.sistolica} mmHg</p>
                        <p> diastolica: ${registro.diastolica} mmHg</p>
                        <p> Resultado: ${registro.clasificacion}</p>
                        <p> Resultado: ${registro.fechaCalculo}</p>
                    </div>`;
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

function verHistorialPrecionArterial() {
    let historialDiv = document.getElementById("historial");
    historialDiv.style.display = "flex";
    actualizarHistorialPrecionArterial();
}

function cerrarHistorialPrecionArterial() {
    document.getElementById("historial").style.display = "none";
}

// Llama a actualizarHistorial() al cargar la p��gina
window.onload = function() {
    actualizarHistorialPrecionArterial();
};
