class Sprite {
    constructor(animacao, x = 0, y = 0, velocidadeX = 0, velocidadeY = 0) {
        this.animacao = animacao;
        this.x = x;
        this.y = y;
        this.velocidadeX = velocidadeX;
        this.velocidadeY = velocidadeY
        this.excluir = false;
    }

    atualizar() {
        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    }

    desenhar() {

    }

    
}