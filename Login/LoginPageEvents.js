const container = document.getElementById('Container');
const registerBtn = document.getElementById('Registro');
const loginBtn = document.getElementById('Login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});