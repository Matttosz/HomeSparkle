
async function getUserData() {
    try {
        const username = prompt("Digite seu nome:");
        const email = prompt("Digite seu e-mail:");
        const telephone = prompt("Digite seu telefone:");
        const address = prompt("Digite seu endereço:");
        const profilePicture = prompt("Digite a URL da sua foto de perfil:");

        
        await new Promise(resolve => setTimeout(resolve, 1500));

       
        return {
            username,
            email,
            telephone,
            address,
            profilePicture
        };
    } catch (error) {
        console.error('Erro ao obter os dados do usuário:', error);
        throw error;
    }
}


function updateUserInfo(userData) {
    document.getElementById('username').textContent = userData.username;
    document.getElementById('email').textContent = userData.email;
    document.getElementById('telephone').textContent = userData.telephone;
    document.getElementById('address').textContent = userData.address;

    const profileImg = document.getElementById('profile-img');
    profileImg.src = userData.profilePicture;
    profileImg.alt = `Foto de perfil de ${userData.username}`;
}


function handleLogout() {
    alert('Você foi desconectado.');
    
}


document.addEventListener('DOMContentLoaded', () => {
    getUserData()
        .then(userData => {
            updateUserInfo(userData);
        })
        .catch(error => {
            document.querySelector('.user-info').innerHTML = '<p>Falha ao carregar dados do usuário.</p>';
        });

    
    document.getElementById('logout-button').addEventListener('click', handleLogout);
});
