class Tubo extends Sprite {
    constructor(animacao, x, y, velocidadeX, velocidadeY, imagem, pontuacao) {
        super(animacao, x, y, velocidadeX, velocidadeY)
        this.imagem = imagem;
        this.pontuacao = pontuacao;
        this.pontuado = false;
        this.peixe = animacao.sprites.filter(x => x.nome == Peixe.name)[0];
        this.incluirInicializacao = false;
    }

    get nome() {
        return Tubo.name;
    }

    atualizar(){
        super.atualizar();
        
        if (this.x <= -this.imagem.width) this.excluir = true;
        
        if (!this.pontuado && (this.x + this.imagem.width) < this.peixe.x) {
            this.pontuacao.incrementa();
            this.pontuado = true;
        } 
    }

}