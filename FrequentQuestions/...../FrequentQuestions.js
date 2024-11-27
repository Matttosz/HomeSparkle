function ShowPopup(PopupId) {
    // Esconder os pop-ups
    const Popups = document.querySelectorAll('.Popup');
    Popups.forEach(Popup => {
        Popup.classList.remove('show');
    });

    // Mostrar o pop-up selecionado
    const Popup = document.getElementById(PopupId);
    if (Popup) {
        Popup.classList.add('show');
    }
}

function HidePopup(PopupId) {
    const Popup = document.getElementById(PopupId);
    if (Popup) {
        Popup.classList.remove('show'); // Oculta o pop-up
    }
}

