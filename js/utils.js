function aleatorioInteiroEntre(min, max) {
    return min + Math.floor(Math.random() * (max - min) + 1);
}

function aleatorioDecimalEntre(min, max) {
    return min + (Math.random() * (max - min));
}