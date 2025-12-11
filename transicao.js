// transicao.js - VERSÃO FINAL CORRIGIDA
console.log('✅ transicao.js carregado');

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 Página carregada');
    
    // 1. BOTÃO PAGAMENTO
    const paymentBtn = document.getElementById('paymentBtn');
    if (paymentBtn) {
        paymentBtn.addEventListener('click', function() {
            window.location.href = 'pagamento.html';
        });
    }
    
    // 2. BOTÃO SERVIÇO
    const serviceBtn = document.getElementById('serviceBtn');
    if (serviceBtn) {
        serviceBtn.addEventListener('click', function() {
            window.location.href = 'painel.html';
        });
    }
    
    // 3. BOTÃO RELATÓRIO DE PAGAMENTOS (IMPORTANTE: ID CORRETO)
    const relatorioPagamentosBtn = document.getElementById('relatorioPagamentosBtn');
    if (relatorioPagamentosBtn) {
        relatorioPagamentosBtn.addEventListener('click', function() {
            console.log('✅ Botão Relatório de Pagamentos clicado!');
            window.location.href = 'relatorio.html';
        });
    } else {
        console.error('❌ ERRO: Botão relatorioPagamentosBtn não encontrado!');
    }
    
    // 4. BOTÃO DIVULGADOR
    const divulgaBtn = document.getElementById('divulgaBtn');
    if (divulgaBtn) {
        divulgaBtn.addEventListener('click', function() {
            window.location.href = 'divulga.html';
        });
    }
    
    // 5. BOTÃO DESPESAS
    const despesasBtn = document.getElementById('despesasBtn');
    if (despesasBtn) {
        despesasBtn.addEventListener('click', function() {
            window.location.href = 'despesas.html';
        });
    }
    
    // 6. BOTÃO INVENTÁRIO
    const inventarioBtn = document.getElementById('inventarioBtn');
    if (inventarioBtn) {
        inventarioBtn.addEventListener('click', function() {
            window.location.href = 'iventario.html';
        });
    }
    
    // 7. BOTÃO FINANÇAS
    const financasBtn = document.getElementById('financasBtn');
    if (financasBtn) {
        financasBtn.addEventListener('click', function() {
            window.location.href = 'perfilfinanca.html';
        });
    }
    
    // 8. BOTÃO CLIENTE
    const clienteBtn = document.getElementById('clienteBtn');
    if (clienteBtn) {
        clienteBtn.addEventListener('click', function() {
            window.location.href = 'cadastrocliente.html';
        });
    }
    
    // 9. BOTÃO PRODUTO
    const produtoBtn = document.getElementById('produtoBtn');
    if (produtoBtn) {
        produtoBtn.addEventListener('click', function() {
            window.location.href = 'cadastroproduto.html';
        });
    }
    
    // 10. BOTÃO ESTOQUE
    const estoqueBtn = document.getElementById('estoqueBtn');
    if (estoqueBtn) {
        estoqueBtn.addEventListener('click', function() {
            window.location.href = 'relatorioestoque.html';
        });
    }
    
    // 11. BOTÃO CATÁLOGO
    const catalogoBtn = document.getElementById('catalogoBtn');
    if (catalogoBtn) {
        catalogoBtn.addEventListener('click', function() {
            window.location.href = 'catalago.html';
        });
    }
    
    // 12. BOTÃO RELATÓRIO GERAL
    const relatorioGeralBtn = document.getElementById('relatorioGeralBtn');
    if (relatorioGeralBtn) {
        relatorioGeralBtn.addEventListener('click', function() {
            console.log('✅ Botão Relatório Geral clicado!');
            window.location.href = 'transiçaoestoque.html';
        });
    }
    
    // 13. BOTÃO CAIXA
    const caixaBtn = document.getElementById('caixaBtn');
    if (caixaBtn) {
        caixaBtn.addEventListener('click', function() {
            window.location.href = 'caixa.html';
        });
    }
    
    // 14. BOTÃO SERVIÇOS
    const servicosBtn = document.getElementById('servicosBtn');
    if (servicosBtn) {
        servicosBtn.addEventListener('click', function() {
            window.location.href = 'serviço.html';
        });
    }
    
    // 15. BOTÃO VOLTAR
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    console.log('✅ Todos os botões configurados!');
});