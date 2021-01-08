class GeradorSprites {
    constructor(animacao, pontuacao) {
        this.animacao = animacao;
        this.pontuacao = pontuacao;
        this.distanciaUltimoTubo = animacao.contexto.canvas.width;
        this.distanciaTubo = animacao.contexto.canvas.width/2.5;
    }

    novoParTudo(velocidade) {
        const tubos = this.animacao.sprites.filter( x => x.nome == Tubo.name);

        if (tubos.length > 0) {
            this.distanciaUltimoTubo = this.animacao.contexto.canvas.width - tubos[tubos.length - 1].x
        } else {
            this.distanciaUltimoTubo = this.animacao.contexto.canvas.width;
            this.distanciaTubo = this.animacao.contexto.canvas.width/2.5;
        }
        
        if (this.distanciaUltimoTubo > this.distanciaTubo) {

            const min = this.animacao.contexto.canvas.height - imagens['pipe-green'].height - imagens['base'].height;
            const max = this.animacao.contexto.canvas.height - 50 - imagens['base'].height;
            const y = aleatorioInteiroEntre(min, max);

            const t = new Tubo(this.animacao, this.animacao.contexto.canvas.width, y, -velocidade, 0, imagens['pipe-green'], this.pontuacao);
            const s = new Tubo(this.animacao, this.animacao.contexto.canvas.width, y - 450, -velocidade, 0, imagens['pipe-green-up'], this.pontuacao);

            this.animacao.incluirSprite(t);
            this.animacao.incluirSprite(s);

        }

    }
}