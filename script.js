document.getElementById('btnMaisInfo').addEventListener('click', function() {
    const maisInfo = document.getElementById('maisInfo');
    if (maisInfo.style.display === 'none') {
        maisInfo.style.display = 'block';
        this.textContent = 'Ocultar Informações';
    } else {
        maisInfo.style.display = 'none';
        this.textContent = 'Mostrar Mais Informações';
    }
});
document.getElementById('btnEstado').addEventListener('click', function() {
    const estado = document.getElementById('estado').value;
    let url = '';

    if (estado === "acre") {
        url = "img/acre.png";
    } else if (estado === "alagoas") {
        url = "img/alagoas.png";
    } else if (estado === "roraima") {
        url = "img/roraima.png";
    } else if (estado === "minas") {
        url = "img/minas.png";
    } else if (estado === "mato") {
        url = "img/mato.png";
    } else if (estado === "matosul") {
        url = "img/matosul.png";
    } else if (estado === "rio") {
        url = "img/rio.png";
    } else if (estado === "paulo") {
        url = "img/paulo.png";
    }

    if (url !== '') {
        window.open(url, '_blank'); // Abre o URL em uma nova janela/aba
    } else {
        alert('Por favor, selecione um estado.');
    }
});

function atualizarData() {
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString() + ' ' + agora.toLocaleTimeString();
    document.getElementById('ultimaAtualizacao').textContent = dataFormatada;
}

// Atualiza a data a cada 5 segundos
setInterval(atualizarData, 5000);
// Exibir alerta de emergência após 10 segundos
setTimeout(function() {
    document.getElementById('alertaEmergencia').style.display = 'block';
}, 10000);

