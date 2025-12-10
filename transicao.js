// transicao.js - VERSÃO FINAL PARA PASTA "enviar ordem"
console.log('✅ transicao.js carregado na pasta "enviar ordem"');

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 Página carregada');
    
    // 1. BOTÃO PAGAMENTO → aquivos.html
    const pagamentoBtn = document.getElementById('paymentBtn');
    if (pagamentoBtn) {
        pagamentoBtn.addEventListener('click', function() {
            console.log('🎯 Indo para aquivos.html');
            window.location.href = 'pagamento.html';
        });
    }
    
    // 2. BOTÃO SERVIÇO → painel.html
    const servicoBtn = document.getElementById('serviceBtn');
    if (servicoBtn) {
        servicoBtn.addEventListener('click', function() {
            console.log('🎯 Indo para painel.html');
            window.location.href = 'painel.html';
        });
    }
    
    // 3. BOTÃO RELATÓRIO → relatorio.html
    const relatorioBtn = document.getElementById('relatorioBtn');
    if (relatorioBtn) {
        relatorioBtn.addEventListener('click', function() {
            console.log('🎯 Indo para relatorio.html');
            window.location.href = 'relatorio.html';
        });
    }
    
    // 4. BOTÃO DIVULGADOR → divulga.html
    const divulgaBtn = document.getElementById('divulgaBtn');
    if (divulgaBtn) {
        divulgaBtn.addEventListener('click', function() {
            console.log('🎯 Indo para divulga.html');
            window.location.href = 'divulga.html';
        });
    }
    
    // 5. BOTÃO DESPESAS → despesas.html
    const despesasBtn = document.getElementById('despesasBtn');
    if (despesasBtn) {
        despesasBtn.addEventListener('click', function() {
            console.log('🎯 Indo para despesas.html');
            window.location.href = 'despesas.html';
        });
    }
    
    // 6. BOTÃO INVENTÁRIO → inventario.html
    const inventarioBtn = document.getElementById('inventarioBtn');
    if (inventarioBtn) {
        inventarioBtn.addEventListener('click', function() {
            console.log('🎯 Indo para inventario.html');
            window.location.href = 'iventario.html';
        });
    }
    
    // 7. BOTÃO FINANÇAS → perfilfinanca.html
    const financasBtn = document.getElementById('financasBtn');
    if (financasBtn) {
        financasBtn.addEventListener('click', function() {
            console.log('🎯 Indo para perfilfinanca.html');
            window.location.href = 'perfilfinança.html';
        });
    }
    
    // 8. BOTÃO VOLTAR → index.html
    const voltarBtn = document.getElementById('backBtn');
    if (voltarBtn) {
        voltarBtn.addEventListener('click', function() {
            console.log('🎯 Indo para index.html');
            window.location.href = 'index.html';
        });
    }
    
    console.log('🎯 Todos os botões configurados!');
});