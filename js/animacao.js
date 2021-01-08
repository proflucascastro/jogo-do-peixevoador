class Animacao {
    constructor(contexto, teclado) {
        this.contexto = contexto;
        this.teclado = teclado;
        this.sprites = [];
        this.spritesTelaInicial = [];
        this.spritesTelaGameOver = [];
        this.rotinas = [];
        this.ligado = false;
        this.estado = 'parado';;
    }

    incluirSprite(sprite, frente = false) {
        this.sprites.push(sprite);
        sprite.frente = frente;
    }

    incluirRotina(rotina) {
        this.rotinas.push(rotina)
        colisor.atualizaListaColisoes();
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

    processarColisoes() {
        colisor.processar();
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
        this.estado = 'loop'
        mouse.estado(this.estado);
    }

    parar() {
        this.ligado = false;
    }

    pausar() {
        this.ligado = !this.ligado;
        
        if (this.ligado) {
            if (this.estado == 'gameOver') {
                this.telaInicial();
            } else {
                this.estado = 'loop';
            }
        } else {
            this.escreverMsg("Enter ou Click para retornar");
            this.estado ='parado';
        }
        mouse.estado(this.estado);
    }

    limparTela() {
        this.contexto.clearRect(0, 0, this.contexto.canvas.width, this.contexto.canvas.height);
        this.contexto.fill();
    }

    loop() {

        if (this.ligado){
            this.limparTela();
            this.excluirSprites();
            this.processarRotinas()
            this.atualizarSprites();
            this.desenharSprites();
            this.processarColisoes();
        }

        const that = this;
        requestAnimationFrame(() => that.loop());

    }

    gameOver() {
        this.desenharSpritesTelaGameOver();
        this.ligado = false;
        this.estado = 'gameOver';
        mouse.estado(this.estado);

    }
    
    incluirSpriteTelaGameOver(sprite) {
        this.spritesTelaGameOver.push(sprite);
    }

    desenharSpritesTelaGameOver() {
        this.spritesTelaGameOver.forEach ((x) => {
            x.desenhar()
        });
    }

    telaInicial() {
        this.inicializarSprites();
        this.limparTela();
        this.desenharSpritesTelaInicial();
        this.ligado = false;
        this.estado = 'parado';
        mouse.estado(this.estado);

    }
    
    incluirSpriteTelaInicial(sprite) {
        this.spritesTelaInicial.push(sprite);
    }

    desenharSpritesTelaInicial() {
        this.spritesTelaInicial.forEach ((x) => {
            x.desenhar()
        });
    }

    inicializarSprites() {
        this.sprites.forEach( x => x.inicializar());
        this.sprites = this.sprites.filter( x => x.incluirInicializacao );
    }

    escreverMsg(msg) {
        this.desenharRetangulo(0,0,400,100,'black', 0.5, true);
        this.escrever(msg, 150, 265);
    }

    desenharRetangulo(x, y, largura, altura, cor = 'black', alfa = 1, central = false) {
        if (central) {
            x = this.contexto.canvas.width/2 - largura/2;
            y = this.contexto.canvas.height/2 - altura/2;
        }
        this.contexto.save();
        this.contexto.globalAlpha = alfa;
        this.contexto.fillStyle = cor;
        this.contexto.fillRect(x, y, largura, altura);
        this.contexto.restore();
    }
    
    escrever(texto, x, y, font = '30px arial', cor = 'white', alfa = 1, centro = true) {
        this.contexto.save();
        this.contexto.globalAlpha = alfa;
        this.contexto.fillStyle = cor;
        this.contexto.font = font;

        if (centro) {
            this.contexto.textBaseLine = 'middle';
            this.contexto.textAlign = 'center';
            x = this.contexto.canvas.width/2;
        }

        this.contexto.fillText(texto, x, y);
        this.contexto.restore();
    }


}