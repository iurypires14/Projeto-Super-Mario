const buttonTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVido = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

buttonTrailer.addEventListener("click", () => {
   alternarModal();
   video.setAttribute("src", linkDoVido);
});

buttonCloseModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});