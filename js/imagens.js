
function carregarImagens(listaImagens, callback) {
    let imgs = [];
    listaImagens.forEach(imagem => {
        imgs[imagem] = new Image();
        imgs[imagem].src = `img/${imagem}.png`;
        imgs[imagem].onload = callback;
    });
    return imgs;
}
