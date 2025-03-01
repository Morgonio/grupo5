function CalcularDosisMedicamento() {
    var peso = document.getElementById("peso").value;
    var concentracion = document.getElementById("concentracion").value;
    var dosisRecomendada = document.getElementById("dosis").value;

    if (peso === "" || concentracion === "" || dosisRecomendada === "") {
        document.getElementById("resultado").innerHTML = "<span class='numero-rojo'>Por favor, ingresa todos los valores.</span>";
        return;
    }

    peso = parseFloat(peso);
    concentracion = parseFloat(concentracion);
    dosisRecomendada = parseFloat(dosisRecomendada);

    if (isNaN(peso) || isNaN(concentracion) || isNaN(dosisRecomendada) || peso <= 0 || concentracion <= 0 || dosisRecomendada <= 0) {
        document.getElementById("resultado").innerHTML = "<span class='numero-rojo'>Por favor, ingresa valores válidos.</span>";
        return;
    }

    var dosisTotal = peso * dosisRecomendada;
    var volumen = dosisTotal / concentracion;

    document.getElementById("resultado").innerHTML = `La dosis total es de <span class='numero-rojo'>${dosisTotal.toFixed(2)}</span> mg y el volumen a administrar es de <span class='numero-rojo'>${volumen.toFixed(2)}</span> ml.`;
    document.getElementById("btnCalcular").style.display = "none";
    document.getElementById("btnRecalcular").style.display = "inline-block";
}

function ReiniciarFormularioDosisMedicamento() {
    document.getElementById("peso").value = "";
    document.getElementById("concentracion").value = "";
    document.getElementById("dosis").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("btnCalcular").style.display = "inline-block";
    document.getElementById("btnRecalcular").style.display = "none";
}
