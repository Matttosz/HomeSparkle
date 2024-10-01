const botao_menu = document.getElementById("botao_menu");
const navLinks = document.getElementById("nav-links");
const botaoMenuIcon = botao_menu.querySelector("i");

botao_menu.addEventListener("click", (e) => {
    navLinks.classList.toggle("aberto");

    const aberto = navLinks.classList.contains("aberto");
    botaoMenuIcon.setAttribute("class", aberto ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("aberto");
    botaoMenuIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container_esquerda h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".container_esquerda .container_botao", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".container_direita h4", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".container_direita h2", {
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".container_direita h3", {
    ...scrollRevealOption,
    delay: 3000,
});

ScrollReveal().reveal(".container_direita p", {
    ...scrollRevealOption,
    delay: 3500,
});

ScrollReveal().reveal(".container_direita .lampada", {
    duration: 1000,
    delay: 4000,
});

ScrollReveal().reveal(".container_direita .luz", {
    duration: 1000,
    delay: 4500,
});

ScrollReveal().reveal(".locacao", {
    ...scrollRevealOption,
    origin: "left",
    delay: 5000,
});

ScrollReveal().reveal(".redes span", {
    ...scrollRevealOption,
    origin: "top",
    delay: 5500,
    interval: 500,
});
