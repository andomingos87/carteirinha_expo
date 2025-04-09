# Carteirinha Digital Eixo

Carteirinha digital interativa com efeito giratório para associados da Eixo. A carteirinha possui frente e verso, exibindo informações do associado e QR Codes para diferentes finalidades.

## Funcionalidades

- Design moderno e responsivo
- Efeito giratório ao clicar no botão abaixo da carteirinha
- Suporte a orientação vertical e horizontal
- Efeito 3D de inclinação ao passar o mouse (em dispositivos desktop)
- Adaptação automática para diferentes tamanhos de tela

## Como usar

1. Clone este repositório
2. Abra o arquivo `index.html` em um navegador web
3. Clique no botão "Girar Carteirinha" para ver o verso

## Personalização

### Imagens

Para personalizar as imagens:

1. Substitua os arquivos na pasta `assets/`:
   - `logo.svg` - Logo da Eixo
   - `photo.svg` - Foto do associado
   - `qr-pix.svg` - QR Code para PIX
   - `qr-presenca.svg` - QR Code para marcação de presença

### Informações

Para alterar as informações do associado:

1. Edite o arquivo `index.html`:
   - Modifique a linha `<h2 class="name">Nome do Associado</h2>` com o nome real
   - Altere `<p class="company">Empreendimento: Embu das Artes</p>` conforme necessário

### Estilo

Para ajustar o estilo da carteirinha:

1. Edite o arquivo `styles.css`:
   - As cores de fundo podem ser alteradas nas propriedades `background` das classes `.card-front` e `.card-back`
   - O tamanho da carteirinha pode ser modificado nas propriedades `width` e `height` da classe `.card`
   - Para personalizar o botão, modifique a classe `.flip-button`

## Compatibilidade

A carteirinha foi projetada para funcionar em:

- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Dispositivos móveis (smartphones e tablets)
- Diferentes orientações de tela (retrato e paisagem)

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript vanilla (sem dependências externas) # carteirinha_expo
