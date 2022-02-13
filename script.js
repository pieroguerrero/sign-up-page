function setSizes() {
    const containerLogo = document.querySelector(".logo");
    const containerForm = document.querySelector(".fields-container");

    const height = containerForm.offsetHeight;
    const top = window.pageYOffset + containerForm.getBoundingClientRect().top

    containerLogo.style.height = height + "px";
    containerLogo.style.marginTop = top + "px";
}



document.addEventListener('DOMContentLoaded', setSizes);
window.onresize = setSizes;