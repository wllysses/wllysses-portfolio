const imagensPainel = document.querySelectorAll('.conteudo-projetos')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0
let totalImagens = imagensPainel.length - 1

function esconderImagem() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar')
}

setaVoltar.addEventListener('click', () => {
    if(imagemAtual === 0) {
        imagemAtual = 4
    }
    imagemAtual--

    esconderImagem()
    mostrarImagem()
})

setaAvancar.addEventListener('click', () => {
    if(imagemAtual === totalImagens) {
        imagemAtual = -1
    }
    imagemAtual++

    esconderImagem()
    mostrarImagem()
})