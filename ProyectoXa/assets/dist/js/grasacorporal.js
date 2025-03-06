let historial = [];
let contadorHistorial = 1;

function calcularGrasaCorporal() {
    document.querySelector(".info").style.display = "none";

    var edad = parseInt(document.getElementById("edad").value);
    var sexo = document.getElementById("sexo").value;
    var altura = parseFloat(document.getElementById("altura").value);
    var cintura = parseInt(document.getElementById("cintura").value);
    var cuello = parseInt(document.getElementById("cuello").value);
    var cadera = parseInt(document.getElementById("cadera").value);

    if (isNaN(edad) || isNaN(altura) || isNaN(cintura) || isNaN(cuello) || isNaN(cadera) ||
        edad <= 0 || altura <= 0 || cintura <= 0 || cuello <= 0 || cadera <= 0) {
        document.getElementById("error").style.display = "block";
        return;
    }

    document.getElementById("error").style.display = "none";

    var porcentajeGrasa;
    if (sexo === "masculino") {
        porcentajeGrasa = 86.010 * Math.log10(cintura - cuello) - 70.041 * Math.log10(altura * 100) + 36.76;
    } else {
        porcentajeGrasa = 163.205 * Math.log10(cintura + cadera - cuello) - 97.152 * Math.log10(altura * 100) - 78.387;
    }

    var resultado = ` Tu porcentaje de grasa corporal es de <strong>${porcentajeGrasa.toFixed(2)}%</strong>`;
    document.getElementById("resultado").innerHTML = resultado;


}
///////////
function GuardarGrasa() {
    document.querySelector(".info").style.display = "none";

    var edad = parseInt(document.getElementById("edad").value);
    var sexo = document.getElementById("sexo").value;
    var altura = parseFloat(document.getElementById("altura").value);
    var cintura = parseInt(document.getElementById("cintura").value);
    var cuello = parseInt(document.getElementById("cuello").value);
    var cadera = parseInt(document.getElementById("cadera").value);

    if (isNaN(edad) || isNaN(altura) || isNaN(cintura) || isNaN(cuello) || isNaN(cadera) ||
        edad <= 0 || altura <= 0 || cintura <= 0 || cuello <= 0 || cadera <= 0) {
        document.getElementById("error").style.display = "block";
        return;
    }

    document.getElementById("error").style.display = "none";

    var porcentajeGrasa;
    if (sexo === "masculino") {
        porcentajeGrasa = 86.010 * Math.log10(cintura - cuello) - 70.041 * Math.log10(altura * 100) + 36.76;
    } else {
        porcentajeGrasa = 163.205 * Math.log10(cintura + cadera - cuello) - 97.152 * Math.log10(altura * 100) - 78.387;
    }

    var resultado = ` Tu porcentaje de grasa corporal es de <strong>${porcentajeGrasa.toFixed(2)}%</strong>`;
    document.getElementById("resultado").innerHTML = resultado;

    // Enviar datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../api/grasacorporal_guardar_mostrar.php", true);
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
    var params = "edad=" + edad + "&sexo=" + sexo + "&altura=" + altura.toFixed(2) + "&cintura=" + cintura + "&cuello=" + cuello + "&cadera=" + cadera + "&porcentajeGrasa=" + porcentajeGrasa.toFixed(2);
    xhr.send(params);

    actualizarHistorialGrasaCorporal();
	
}

function verHistorialGrasaCorporal() {
    var historyContainer = document.getElementById("historyContainer");
    historyContainer.style.display = "block";
    actualizarHistorialGrasaCorporal();
}

function cerrarHistorialGrasaCorporal() {
    document.getElementById("historyContainer").style.display = "none";
}

function actualizarHistorialGrasaCorporal() {
    var historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../api/grasacorporal_guardar_mostrar.php", true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var historialDatos = JSON.parse(xhr.responseText);
            historialDatos.forEach(function(item) {
                var li = document.createElement("div");
                li.classList.add("history-item");
                li.innerHTML = `
                    <p><b>Registro ${item.id}</b></p>
                    <p> Edad: ${item.edad} años</p>
                    <p> Sexo: ${item.sexo}</p>
                    <p> Altura: ${item.altura} m</p>
                    <p> Cintura: ${item.cintura} cm</p>
                    <p> Cuello: ${item.cuello} cm</p>
                    <p> Cadera: ${item.cadera}%</p>
                    <p> Su % de grasa es: ${item.porcentajeGrasa}%</p>
                    <p> Fecha de Calculo: ${new Date(item.fechaCalculo).toLocaleDateString()}</p>`;
                historyList.appendChild(li);
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
