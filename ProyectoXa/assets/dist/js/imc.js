let generoSeleccionado = '';

function selectGender(gender) {
    document.querySelectorAll('.gender').forEach(genderDiv => genderDiv.classList.remove('selected'));
    document.getElementById(gender).parentElement.classList.add('selected');
    generoSeleccionado = gender;
}

function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if (!peso || !altura || !generoSeleccionado) {
        document.getElementById("error").style.display = "block";
        return;
    }

    document.getElementById("error").style.display = "none";

    var imc = peso / (altura * altura);
    var imcFixed = imc.toFixed(1);

    var categoria = obtenerCategoriaIMC(imc);

    var marker = document.getElementById("marker");

    var percentage = 0;
    if (imc < 18.5) {
        percentage = ((imc - 15) / (18.5 - 15)) * 25;
    } else if (imc >= 18.5 && imc < 24.9) {
        percentage = 25 + ((imc - 18.5) / (24.9 - 18.5)) * 25;
    } else if (imc >= 25 && imc < 29.9) {
        percentage = 50 + ((imc - 25) / (29.9 - 25)) * 25;
    } else {
        percentage = 75 + ((imc - 30) / (40 - 30)) * 25;
    }

    percentage = Math.max(0, Math.min(100, percentage));
    marker.style.left = percentage + "%";
    marker.innerText = `IMC: ${imcFixed}`;

    document.querySelector('.imc-bar').style.display = 'flex';

}
/////////
function GuardarIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if (!peso || !altura || !generoSeleccionado) {
        document.getElementById("error").style.display = "block";
        return;
    }

    document.getElementById("error").style.display = "none";

    var imc = peso / (altura * altura);
    var imcFixed = imc.toFixed(1);

    var categoria = obtenerCategoriaIMC(imc);

    var marker = document.getElementById("marker");

    var percentage = 0;
    if (imc < 18.5) {
        percentage = ((imc - 15) / (18.5 - 15)) * 25;
    } else if (imc >= 18.5 && imc < 24.9) {
        percentage = 25 + ((imc - 18.5) / (24.9 - 18.5)) * 25;
    } else if (imc >= 25 && imc < 29.9) {
        percentage = 50 + ((imc - 25) / (29.9 - 25)) * 25;
    } else {
        percentage = 75 + ((imc - 30) / (40 - 30)) * 25;
    }

    percentage = Math.max(0, Math.min(100, percentage));
    marker.style.left = percentage + "%";
    marker.innerText = `IMC: ${imcFixed}`;


    // Enviar datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/imc_guardar_mostar.php", true);
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
    var params = "genero=" + generoSeleccionado + "&peso=" + peso + "&altura=" + altura + "&imc=" + imcFixed + "&categoria=" + categoria;
    xhr.send(params);
	verHistorialIMC();
}

function obtenerCategoriaIMC(imc) {
    if (imc < 18.5) {
        return 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Saludable';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidad';
    }
}

function verHistorialIMC() {
    var historialContainer = document.getElementById("historialContainer");
    var historialDiv = document.getElementById("historial");
    historialDiv.innerHTML = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../api/imc_guardar_mostar.php", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var historialDatos = JSON.parse(xhr.responseText);
            historialDatos.forEach((item) => {
                var nuevoRegistro = document.createElement("div");
                nuevoRegistro.classList.add("history-item");
                nuevoRegistro.innerHTML = `
                    <p>📌 <b>Registro ${item.id}:</b></p>
                    <p>👫 <b>Género:</b> ${item.genero.charAt(0).toUpperCase() + item.genero.slice(1)}</p>
                    <p>⚖️ <b>Peso:</b> ${item.peso} kg</p>
                    <p>📏 <b>Altura:</b> ${item.altura} m</p>
                    <p>🔥 <b>IMC:</b> ${item.imc}</p>
                    <p>🔥 <b>Estado:</b> ${item.categoria}</p>
                    <p>📅 <b>Fecha:</b> ${item.fecha}</p>`;
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

function cerrarHistorialIMC() {
    document.getElementById("historialContainer").style.display = "none";
}
