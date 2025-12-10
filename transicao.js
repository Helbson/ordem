// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // URLs de redirecionamento para cada módulo
    const moduleUrls = {
        paymentBtn: 'ordem_pagamento.html',
        serviceBtn: 'ordem_servico.html',
        relatorioBtn: 'relatorio_pagamentos.html',
        divulgaBtn: 'divulgador.html',
        despesasBtn: 'despesas_pessoais.html',
        inventarioBtn: 'inventario.html',
        financasBtn: 'financas.html'
    };
    
    // Adiciona evento de clique para cada botão de módulo
    Object.keys(moduleUrls).forEach(btnId => {
        const button = document.getElementById(btnId);
        if (button) {
            button.addEventListener('click', function() {
                const card = this.closest('.card');
                
                // Efeito visual de clique
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
                
                // Adiciona efeito de loading
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
                this.disabled = true;
                
                // Simula tempo de carregamento e redireciona
                setTimeout(() => {
                    // Em um sistema real, aqui seria o redirecionamento real
                    // window.location.href = moduleUrls[btnId];
                    
                    // Para demonstração, mostra um alerta
                    const moduleName = card.querySelector('h2').textContent;
                    showLoadingMessage(moduleName);
                    
                    // Restaura o botão
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.disabled = false;
                    }, 1500);
                    
                }, 800);
            });
        }
    });
    
    // Botão voltar para página inicial
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Efeito visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Adiciona efeito de loading
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecionando...';
            this.disabled = true;
            
            // Simula redirecionamento
            setTimeout(() => {
                alert('Redirecionando para a página inicial...');
                // Em um sistema real: window.location.href = 'index.html';
                
                // Restaura o botão
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 1000);
            }, 800);
        });
    }
    
    // Efeito de hover nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
    
    // Função para mostrar mensagem de carregamento
    function showLoadingMessage(moduleName) {
        // Cria uma mensagem flutuante
        const message = document.createElement('div');
        message.className = 'loading-message';
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                text-align: center;
                z-index: 1000;
                min-width: 300px;
                animation: fadeIn 0.3s ease-out;
            ">
                <i class="fas fa-check-circle" style="font-size: 3rem; color: #4CAF50; margin-bottom: 15px;"></i>
                <h3 style="color: #1a237e; margin-bottom: 10px;">Módulo: ${moduleName}</h3>
                <p style="color: #666; margin-bottom: 20px;">Redirecionando para o módulo selecionado...</p>
                <div style="
                    height: 4px;
                    background: #f0f0f0;
                    border-radius: 2px;
                    overflow: hidden;
                    margin-bottom: 20px;
                ">
                    <div style="
                        height: 100%;
                        background: #4CAF50;
                        width: 0%;
                        animation: progressBar 2s ease-in-out;
                    "></div>
                </div>
                <button onclick="this.parentElement.style.display='none'" style="
                    background: #1a237e;
                    color: white;
                    border: none;
                    padding: 8px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                ">
                    Fechar
                </button>
            </div>
        `;
        
        // Adiciona estilos para animações
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -40%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
            }
            
            @keyframes progressBar {
                0% { width: 0%; }
                100% { width: 100%; }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(message);
        
        // Remove a mensagem após 2 segundos
        setTimeout(() => {
            if (message.parentElement) {
                message.remove();
            }
        }, 2000);
    }
    
    // Adiciona funcionalidade de teclado
    document.addEventListener('keydown', function(event) {
        // Tecla ESC fecha qualquer mensagem aberta
        if (event.key === 'Escape') {
            const messages = document.querySelectorAll('.loading-message');
            messages.forEach(msg => msg.remove());
        }
        
        // Navegação por teclado numérica (1-7 para os módulos)
        if (event.key >= '1' && event.key <= '7') {
            const index = parseInt(event.key) - 1;
            const cards = document.querySelectorAll('.card');
            if (cards[index]) {
                const button = cards[index].querySelector('.btn');
                if (button) {
                    button.click();
                }
            }
        }
        
        // Tecla 'V' para voltar
        if (event.key === 'v' || event.key === 'V') {
            if (backBtn) {
                backBtn.click();
            }
        }
    });
    
    // Inicializa tooltips para os ícones
    const icons = document.querySelectorAll('.icon-container');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const title = this.closest('.card').querySelector('h2').textContent;
            // Em um sistema real, aqui poderia ser implementado um tooltip
        });
    });
});