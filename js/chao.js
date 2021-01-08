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
            if (this.x < -this.imagem.width) this.x = this.animacao.contexto.canvas.width;
        } else {
            this.y -= this.velocidadeY;
            if (this.y < -this.imagem.height) this.y = 0;
        }
    }

}