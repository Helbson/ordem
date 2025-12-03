// transicao.js

// Efeito visual ao passar o mouse nos cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Efeito de digitação no título
const title = document.querySelector('.header h1');
if (title) {
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
}

// Botão Voltar
document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
});

// Botões dos cards - CORRIGIDOS com os IDs corretos
document.getElementById('paymentBtn').addEventListener('click', function() {
    window.location.href = 'pagamento.html';
});

document.getElementById('serviceBtn').addEventListener('click', function() {
    window.location.href = 'painel.html';
});

document.getElementById('relatorioBtn').addEventListener('click', function() {
    window.location.href = 'relatorio.html';
});

// CORREÇÃO AQUI: Usar o ID correto "divulgaBtn" em vez de "settingsBtn"
document.getElementById('divulgaBtn').addEventListener('click', function() {
    window.location.href = 'divulga.html';
});

// CORREÇÃO AQUI: Usar o ID correto "Despesas" em vez de "helpBtn"
document.getElementById('Despesas').addEventListener('click', function() {
    window.location.href = 'despesas.html';
});