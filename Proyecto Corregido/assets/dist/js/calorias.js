function calcularCalorias() {
    var edad = parseInt(document.getElementById("edad").value);
    var sexo = document.getElementById("sexo").value;
    var altura = parseInt(document.getElementById("altura").value);
    var peso = parseInt(document.getElementById("peso").value);
    var actividad = document.getElementById("actividad").value;

    if (isNaN(edad) || isNaN(altura) || isNaN(peso)) {
        document.getElementById("resultado").innerHTML = "<span class='alerta'>Por favor, completa todos los campos.</span>";
        return;
    }

    var metabolismoBasal = sexo === "masculino" ? 
        (10 * peso) + (6.25 * altura) - (5 * edad) + 5 : 
        (10 * peso) + (6.25 * altura) - (5 * edad) - 161;

    var factores = {
        "sedentario": 1.2,
        "ligero": 1.375,
        "moderado": 1.55,
        "intenso": 1.725,
        "muy_intenso": 1.9
    };
    var calorias = metabolismoBasal * factores[actividad];

    document.getElementById("resultado").innerHTML = `Necesitas consumir aproximadamente <span class='alerta'>${calorias.toFixed(2)}</span> calorías al día.`;

    // Ocultar botón "Calcular Calorías" y mostrar "Volver a Calcular"
    document.getElementById("btnCalcular").classList.add("oculto");
    document.getElementById("btnRecalcular").classList.remove("oculto");
}

function reiniciarFormulario() {
    document.getElementById("edad").value = "";
    document.getElementById("sexo").value = "masculino";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("actividad").value = "sedentario";
    document.getElementById("resultado").innerHTML = "";

    // Mostrar botón "Calcular Calorías" y ocultar "Volver a Calcular"
    document.getElementById("btnCalcular").classList.remove("oculto");
    document.getElementById("btnRecalcular").classList.add("oculto");
}