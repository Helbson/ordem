// transicao.js - COMPLETO E ATUALIZADO
// ===========================================

document.addEventListener('DOMContentLoaded', function() {

    // Botão Ordem de Pagamento
    const paymentBtn = document.getElementById('paymentBtn');
    if (paymentBtn) {
        paymentBtn.addEventListener('click', function() {
            window.location.href = 'pagamento.html';
        });
    }

    // Botão Ordem de Serviço
    const serviceBtn = document.getElementById('serviceBtn');
    if (serviceBtn) {
        serviceBtn.addEventListener('click', function() {
            window.location.href = 'painel.html';
        });
    }

    // Botão Relatório de Pagamentos
    const relatorioBtn = document.getElementById('relatorioBtn');
    if (relatorioBtn) {
        relatorioBtn.addEventListener('click', function() {
            window.location.href = 'relatorio.html';
        });
    }

    // Botão Divulgador
    const divulgaBtn = document.getElementById('divulgaBtn');
    if (divulgaBtn) {
        divulgaBtn.addEventListener('click', function() {
            window.location.href = 'divulga.html';
        });
    }

    // Botão Despesas
    const despesasBtn = document.getElementById('despesasBtn');
    if (despesasBtn) {
        despesasBtn.addEventListener('click', function() {
            window.location.href = 'despesas.html';
        });
    }

    // Botão Inventário
    const inventarioBtn = document.getElementById('inventarioBtn');
    if (inventarioBtn) {
        inventarioBtn.addEventListener('click', function() {
            window.location.href = 'iventario.html';
        });
    }

    // Botão Finanças (NOVO)
    const financasBtn = document.getElementById('financasBtn');
    if (financasBtn) {
        financasBtn.addEventListener('click', function() {
            window.location.href = 'perfilfinança.html'; // Crie este arquivo
        });
    }
    

    // Botão Voltar para Home
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Adicionar efeito de clique em todos os cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Evita que o clique no card seja acionado quando clicar no botão
            if (!e.target.classList.contains('btn') && !e.target.closest('.btn')) {
                const button = this.querySelector('.btn');
                if (button) {
                    button.click();
                }
            }
        });
    });

    // Adicionar efeito de loading nos botões (opcional)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Adiciona classe loading por 1.5 segundos
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1500);
        });
    });
});