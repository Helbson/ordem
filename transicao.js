// Efeito visual ao passar o mouse nos cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Efeito de digitação no título
const title = document.querySelector('.header h1');
const originalText = title.textContent;
title.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        title.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Iniciar efeito de digitação
setTimeout(typeWriter, 300);

// Botão Voltar
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'login.html'; // ou a página anterior
});

// Botões dos cards
document.getElementById('paymentBtn').addEventListener('click', function() {
    
   window.location.href='pagamento.html' // window.location.href = 'pagamento.html';
});

document.getElementById('serviceBtn').addEventListener('click', function() {
    
     window.location.href='painel.html'// window.location.href = 'servico.html';
});

document.getElementById('relatorioBtn').addEventListener('click', function() {
    window.location.href = 'relatorio.html'; // window.location.href = 'servico.html';}
});