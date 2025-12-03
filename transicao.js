// transicao.js - COMPLETO E CORRIGIDO
// ===========================================

// Aguarda o carregamento completo do DOM
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
            window.location.href = 'servico.html';
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
            window.location.href = 'divulgador.html';
        });
    }

    // Botão Despesas
    const despesasBtn = document.getElementById('despesasBtn');
    if (despesasBtn) {
        despesasBtn.addEventListener('click', function() {
            window.location.href = 'despesas.html';
        });
    }

    // Botão Inventário - CORRIGIDO PARA iventario.html
    const inventarioBtn = document.getElementById('inventarioBtn');
    if (inventarioBtn) {
        inventarioBtn.addEventListener('click', function() {
            window.location.href = 'iventario.html'; // Nome correto do arquivo
        });
    }

    // Botão Voltar para Home
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

});