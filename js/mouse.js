class Mouse {
    constructor(document) {
        this.estados = [];
        this.estadoAtual = ''

        document.addEventListener('click',() => this.click());
       
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