const container = document.getElementById('container');
const registroBotao = document.getElementById('registro');
const loginBotao = document.getElementById('login');

registroBotao.addEventListener('click', () => {
    container.classList.add("ativo");
});

loginBotao.addEventListener('click', () => {
    container.classList.remove("ativo");
});