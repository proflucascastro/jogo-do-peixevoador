class Mouse {
    constructor(contexto) {
        this.contexto = contexto
        this.estados = [];
        this.estadoAtual = ''

        this.contexto.canvas.addEventListener('click',() => this.click());
       
    }

    onClick(estado, callback){
        this.estados[estado] = callback;
        this.estadoAtual = estado;
    }

    estado(estado) {
        this.estadoAtual = estado;
    }

    click(estado) {
        if (this.estados[this.estadoAtual]) this.estados[this.estadoAtual]();
    }

}