let selectedGender = null;

function selectGender(gender) {
    document.querySelectorAll('.gender').forEach(el => el.classList.remove('selected'));
    document.getElementById(gender).parentElement.classList.add('selected');
    selectedGender = gender;
}

function CalcularIMC() {
    document.getElementById("resultado").innerText = ""; // Oculta mensaje de error al calcular

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, ingresa todos los valores.";
        document.getElementById("resultado").style.color = "red";
        return;
    }

    let imc = peso / (altura * altura);
    let imcFixed = imc.toFixed(1);

    let marker = document.getElementById("marker");
    let percentage = ((imc - 15) / (40 - 15)) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    marker.style.left = percentage + "%";
    marker.innerText = `Tu IMC: ${imcFixed}`;

    document.querySelector('.imc-bar').style.display = 'flex';
    document.getElementById('calculateBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'block';
}

function ReiniciarFormularioIMC() {
    // Restablecer los campos de entrada
    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';
    
    // Restablecer la selección de género
    document.querySelectorAll('.gender').forEach(el => el.classList.remove('selected'));
    selectedGender = null;
    
    // Ocultar la barra de IMC y el marcador
    document.querySelector('.imc-bar').style.display = 'none';
    
    // Mostrar el botón de calcular nuevamente
    document.getElementById('calculateBtn').style.display = 'block';
    
    // Ocultar el botón de reinicio
    document.getElementById('resetBtn').style.display = 'none';
    
    // Limpiar el resultado
    document.getElementById("resultado").innerText = '';
}