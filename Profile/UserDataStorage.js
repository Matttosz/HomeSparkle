// Função para salvar os dados do usuário localmente (pode ser usado com LocalStorage ou envio para servidor)
function saveUserData() {
    const username = document.getElementById("username").value || "Nome não informado";
    const email = document.getElementById("email").value || "E-mail não informado";
    const telephone = document.getElementById("telephone").value || "Telefone não informado";
    const address = document.getElementById("address").value || "Endereço não informado";

    const userData = {
        username,
        email,
        telephone,
        address,
        profilePicture: document.getElementById("profile-img").src // Captura a URL da imagem
    };

    // Salvando os dados no LocalStorage (caso queira persistir os dados localmente)
    localStorage.setItem("userData", JSON.stringify(userData));

    // Confirmação para o usuário
    alert("Dados salvos com sucesso!");
}

// Função para exibir os dados do usuário (se já estiverem salvos no LocalStorage)
function loadUserData() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
        document.getElementById("username").value = userData.username;
        document.getElementById("email").value = userData.email;
        document.getElementById("telephone").value = userData.telephone;
        document.getElementById("address").value = userData.address;
        document.getElementById("profile-img").src = userData.profilePicture || "default-profile.png";
    }
}

// Função para o upload de foto
function setupPhotoUpload() {
    const uploadInput = document.getElementById("upload-photo");
    const profileImg = document.getElementById("profile-img");

    uploadInput.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImg.src = e.target.result;
                alert("Foto de perfil atualizada!");
            };
            reader.readAsDataURL(file);
        } else {
            alert("Por favor, selecione uma imagem válida.");
        }
    });
}

// Função de logout
function handleLogout() {
    localStorage.removeItem("userData");
    alert("Você foi desconectado.");
    window.location.href = "/Landing/LandingPage.html"; 
}

document.addEventListener("DOMContentLoaded", function () {
    loadUserData(); 
    setupPhotoUpload(); 
    document.getElementById("save-button").addEventListener("click", saveUserData);
    document.getElementById("logout-button").addEventListener("click", handleLogout);
});
