class Chao extends Sprite {
    constructor(animacao, x, y, velocidadeX, velocidadeY, imagem, rolagem = 'horizontal'){
        super(animacao, x, y, velocidadeX, velocidadeY);
        this.rolagem = rolagem;
        this.imagem = imagem;
    }

    get nome() {
        return Chao.name;
    }

    atualizar() {
        if (this.rolagem == 'horizontal') {
            this.x -= this.velocidadeX;
            if (this.x < -this.imagem.width) this.x = 0;
        } else {
            this.y -= this.velocidadeY;
            if (this.y < -this.imagem.height) this.y = 0;
        }
    }

    desenhar() {
        const h = Math.floor(this.animacao.contexto.canvas.width/this.imagem.width)+1
        const v = Math.floor(this.animacao.contexto.canvas.height/this.imagem.height)+1
        if (this.rolagem == 'horizontal') {
            for (let i = 0; i <= h; i++) {
                this.animacao.contexto.drawImage(this.imagem, this.x + i * this.imagem.width, this.y);
            }
        } else {
            for (let i = 0; i <= h; i++) {
                this.animacao.contexto.drawImage(this.imagem, this.x, this.y + i * this.imagem.height);
            }
        }
    }
}