document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const cardInner = document.querySelector('.card-inner');
    const flipButton = document.getElementById('flip-button');
    let isFlipped = false;
    
    // Função para girar o cartão
    function flipCard() {
        isFlipped = !isFlipped;
        card.classList.toggle('flip');
        
        // Garante que a transformação seja aplicada corretamente
        if (isFlipped) {
            cardInner.style.transform = 'rotateY(180deg)';
        } else {
            cardInner.style.transform = 'rotateY(0)';
        }
    }
    
    // Evento de clique no botão para girar o cartão
    flipButton.addEventListener('click', flipCard);
    
    // Adiciona efeito 3D de inclinação ao passar o mouse (apenas em dispositivos desktop)
    if (window.innerWidth > 768) {
        card.addEventListener('mousemove', function(e) {
            // Evitar aplicar o efeito de mouse se estiver em transição de giro
            if (card.classList.contains('animating')) return;
            
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            const rotateY = (mouseX / (cardRect.width / 2)) * 10; // Limita a rotação a 10 graus
            const rotateX = -((mouseY / (cardRect.height / 2)) * 10);
            
            // Aplica a transformação apenas como efeito adicional, não interferindo com a rotação
            if (!isFlipped) {
                cardInner.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            } else {
                cardInner.style.transform = `rotateY(180deg) rotateX(${rotateX}deg)`;
            }
        });
        
        // Restaura a posição quando o mouse sai do cartão
        card.addEventListener('mouseleave', function() {
            if (!isFlipped) {
                cardInner.style.transform = 'rotateY(0) rotateX(0)';
            } else {
                cardInner.style.transform = 'rotateY(180deg) rotateX(0)';
            }
        });
    }
    
    // Adapta o cartão para orientação do dispositivo (retrato/paisagem)
    function adjustOrientation() {
        if (window.innerHeight > window.innerWidth) {
            // Orientação retrato
            document.body.classList.add('portrait');
            document.body.classList.remove('landscape');
        } else {
            // Orientação paisagem
            document.body.classList.add('landscape');
            document.body.classList.remove('portrait');
        }
    }
    
    // Verifica a orientação ao carregar e ao redimensionar
    window.addEventListener('load', adjustOrientation);
    window.addEventListener('resize', adjustOrientation);
}); 