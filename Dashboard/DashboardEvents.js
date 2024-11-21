document.querySelectorAll('.MedidasIcone').forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const PopupId = ['PopupPotencia', 'PopupCorrente', 'PopupConsumo'][index];
        showPopup(PopupId);
    });
});

function showPopup(PopupId) {
    document.getElementById(PopupId).style.display = 'block';
}

function hidePopup(PopupId) {
    document.getElementById(PopupId).style.display = 'none';
}
