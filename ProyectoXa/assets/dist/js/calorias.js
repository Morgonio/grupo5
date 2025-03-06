function calcularCalorias() {
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var actividad = document.getElementById("actividad").value;

    if (!edad || !sexo || !altura || !peso || !actividad) {
        document.getElementById("error").style.display = "block";
        return;
    }

    document.getElementById("error").style.display = "none";

    var metabolismoBasal = sexo === "masculino" ?
        (10 * peso) + (6.25 * (altura * 100)) - (5 * edad) + 5 :
        (10 * peso) + (6.25 * (altura * 100)) - (5 * edad) - 161;

    var factores = {
        "sedentario": 1.2,
        "ligero": 1.375,
        "moderado": 1.55,
        "intenso": 1.725,
        "muy_intenso": 1.9
    };
    var calorias = metabolismoBasal * factores[actividad];
    var caloriasFixed = calorias.toFixed(1);

    document.getElementById("resultado").innerHTML =
        `Necesitas consumir Aproximadamente <span style="color: red;"><b>${caloriasFixed}</b></span> kcal/día.`;

    // guardarDatos(edad, sexo, altura, peso, actividad, caloriasFixed);
}

function Guardar(){
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var actividad = document.getElementById("actividad").value;

    if (!edad || !sexo || !altura || !peso || !actividad) {
        document.getElementById("error").style.display = "block";
        return;
    }

    document.getElementById("error").style.display = "none";

    var metabolismoBasal = sexo === "masculino" ?
        (10 * peso) + (6.25 * (altura * 100)) - (5 * edad) + 5 :
        (10 * peso) + (6.25 * (altura * 100)) - (5 * edad) - 161;

    var factores = {
        "sedentario": 1.2,
        "ligero": 1.375,
        "moderado": 1.55,
        "intenso": 1.725,
        "muy_intenso": 1.9
    };
    var calorias = metabolismoBasal * factores[actividad];
    var caloriasFixed = calorias.toFixed(1);
	
    GuardarCalorias(edad, sexo, altura, peso, actividad, caloriasFixed);
}

function GuardarCalorias(edad, sexo, altura, peso, actividad, calorias) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/guardar_datos_calorias.php", true);
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
    var params = "edad=" + edad + "&sexo=" + sexo + "&altura=" + altura + "&peso=" + peso + "&actividad=" + actividad + "&calorias=" + calorias;
    xhr.send(params);
	const usernameSpan = document.getElementById('username');
const username = usernameSpan.textContent || usernameSpan.innerText;
console.log(username);
	// Después de guardar un registro en CalculoCalorias
guardarUsuarioRegistro(username, "CalculoCalorias");
verHistorialCalorias();
}

function verHistorialCalorias() {
    	
const usernameSpan = document.getElementById('username');
const username = usernameSpan.textContent || usernameSpan.innerText;
console.log(username);
aa();
}


function aa() {
    var historialContainer = document.getElementById("historialContainer");
    var historialDiv = document.getElementById("historial");
    historialDiv.innerHTML = "";

    // Obtener el nombre de usuario del localStorage
    const usernameSpan = document.getElementById('username');
const username = usernameSpan.textContent || usernameSpan.innerText;
console.log(username);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../api/conexhistorial.php?username=" + username, true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var historialDatos = JSON.parse(xhr.responseText);
            if (historialDatos.error) {
                console.error(historialDatos.error);
                alert(historialDatos.error); // Mostrar mensaje de error
            } else {
                historialDatos.forEach((item) => {
                    var nuevoRegistro = document.createElement("div");
                    nuevoRegistro.classList.add("history-item");
                    nuevoRegistro.innerHTML =
                        `<p> <b>Registro ${item.id}:</b></p>
                        <p> <b>Edad:</b> ${item.edad} años</p>
                        <p>⚤ <b>Sexo:</b> ${item.sexo}</p>
                        <p> <b>Altura:</b> ${item.altura} m</p>
                        <p>⚖️ <b>Peso:</b> ${item.peso} kg</p>
                        <p> <b>Nivel de actividad:</b> ${item.actividad}</p>
                        <p> <b>Calorías:</b> ${item.calorias} kcal/día</p>
                        <p> <b>Fecha:</b> ${item.fecha_hora}</p>`;
                    historialDiv.appendChild(nuevoRegistro);
                });
                historialContainer.style.display = "block";
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







function cerrarHistorial() {
    document.getElementById("historialContainer").style.display = "none";
}

	
	////////////
	function guardarUsuarioRegistro(username, strgTabla) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/conexhistorial.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log(xhr.responseText);
        } else {
            console.error("Error al guardar registro.onload");
        }
    };
    xhr.onerror = function() {
        console.error("Error de red al guardar registro.function");
    };
    var params = "&username=" + username + "&strgTabla=" + strgTabla;
    xhr.send(params);
}