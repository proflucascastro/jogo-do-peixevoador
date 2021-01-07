class Peixe extends Sprite {
    constructor(animacao, x, y, velocidadeX, velocidadeY, imagens) {
        super(animacao, x, y, velocidadeX, velocidadeY)
        this.imagens = imagens;
        this.imagem = imagens[0];
        this.forca = 50;
        this.gravidade = -this.forca/2;
        this.qtdeUp = 0;
        this.limteUP = 3;
    }

    get nome() {
        return Peixe.name;
    }

    atualizar() {
        if (this.animacao.teclado.pressionada(SETA_PARA_CIMA) && this.limteUP > this.qtdeUp) {
            this.qtdeUp++;
            this.y -= this.velocidadeY;
            if (this.gravidade < this.forca/2) this.gravidade = this.forca;
        } else if (this.animacao.teclado.pressionada(SETA_PARA_BAIXO)) {
            this.gravidade = 0;            
            this.y += this.velocidadeY;
        }

        if (this.gravidade > 0) {
            if (this.y > 0) {
                this.y -= this.velocidadeY;
                this.imagem = this.imagens[2];
            }
        } else {
            this.imagem = this.imagens[1];
            this.y += this.velocidadeY;
            this.qtdeUp = 0;
        }
        this.gravidade--;
    }

    desenhar() {
        this.animacao.contexto.drawImage(this.imagem, this.x, this.y)
    }
}