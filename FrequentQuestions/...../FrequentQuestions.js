function ShowPopup(PopupId) {
    const Popups = document.querySelectorAll('.Popup');
    Popups.forEach(Popup => {
        Popup.classList.remove('show');
    });
    const Popup = document.getElementById(PopupId);
    if (Popup) {
        Popup.classList.add('show');
    }
}

function HidePopup(PopupId) {
    const Popup = document.getElementById(PopupId);
    if (Popup) {
        Popup.classList.remove('show');
    }
}

