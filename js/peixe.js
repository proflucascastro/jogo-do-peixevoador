class Peixe extends Sprite {
    constructor(animacao, x, y, velocidadeX, velocidadeY, imagens) {
        super(animacao, x, y, velocidadeX, velocidadeY)
        this.imagens = imagens;
        this.imagem = imagens[0];
        this.forca = 3.5;
        this.gravidade = 0.2;
        this.frame = 0;
        this.timeTime = 10;
        
    }

    get nome() {
        return Peixe.name;
    }

    click() {
        this.velocidadeY = -this.forca;
    }

    atualizar() {

        this.frame++
        this.imagem = this.imagens[Math.floor(this.frame/this.timeTime)];
        if (this.frame == (this.timeTime * this.imagens.length - 1)) this.frame = 0;

        if (this.animacao.teclado.pressionada(SETA_PARA_CIMA)) {
            this.velocidadeY = -this.forca;
        } 

        this.velocidadeY += this.gravidade;
        if (this.y + this.velocidadeY >= 0) this.y += this.velocidadeY;
    }

}