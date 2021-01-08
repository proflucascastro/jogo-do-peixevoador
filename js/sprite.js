class Sprite {
    constructor(animacao, x = 0, y = 0, velocidadeX = 0, velocidadeY = 0) {
        this.animacao = animacao;
        this.xInicial = x;
        this.yInicial = y;
        this.velocidadeXIncial = velocidadeX;
        this.velocidadeYIncial = velocidadeY;
        this.x = x;
        this.y = y;
        this.velocidadeX = velocidadeX;
        this.velocidadeY = velocidadeY
        this.excluir = false;
        this.incluirInicializacao = true;
    }

    atualizar() {
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    }

    desenhar() {
        this.animacao.contexto.drawImage(this.imagem, this.x, this.y);
    }

    get retangulosColisao(){
        return [
            { 
                x1: this.x,
                x2: this.x + this.imagem.width,
                y1: this.y,
                y2: this.y + this.imagem.height
            }
        ];
    }

    inicializar() {
        this.x = this.xInicial;
        this.y = this.yInicial;
        this.velocidadeX = this.velocidadeXIncial;
        this.velocidadeY = this.velocidadeYIncial;
    }
    
}