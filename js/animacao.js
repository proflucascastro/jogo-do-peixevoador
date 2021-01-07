class Animacao {
    constructor(contexto, teclado) {
        this.contexto = contexto;
        this.teclado = teclado;
        this.sprites = [];
        this.rotinas = [];
        this.ligado = false;
    }

    incluirSprite(sprite, frente = false) {
        this.sprites.push(sprite);
        sprite.frente = frente;
    }

    incluirRotina(rotina) {
        this.rotinas.push(rotina)
    }

    excluirSprite(sprite) {
        sprite.remove = true;
    }

    excluirSprites(){
        this.sprites = this.sprites.filter( x => !x.excluir );
    }

    atualizarSprites() {
        this.sprites.forEach( x => x.atualizar());
    }

    processarRotinas() {
        this.rotinas.forEach( x => x());
    }

    desenharSprites() {
        this.sprites.forEach ((x) => {
            if (!x.frente) x.desenhar()
        });
        this.sprites.forEach ((x) => {
            if (x.frente) x.desenhar()
        });
    }

    iniciar() {
        this.ligado = true;
    }

    parar() {
        this.ligado = false;
    }

    pausar() {
        this.ligado = !this.ligado;
    }

    limparTela() {
        this.contexto.clearRect(0, 0, this.contexto.canvas.width, this.contexto.canvas.height);
        this.contexto.fill();
    }

    loop() {

        if (!this.ligado) return;

        this.limparTela();
        this.excluirSprites();
        this.processarRotinas()
        this.atualizarSprites();
        this.desenharSprites();

        const that = this;
        requestAnimationFrame(() => that.loop());

    }


}