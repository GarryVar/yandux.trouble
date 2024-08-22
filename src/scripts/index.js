function addTabHandler(evt) {
    let btnMore = evt.target;
    let newTab = document.createElement('a');
    newTab.href="#";
    newTab.classList.add('tab__item', 'animate__animated', 'animate__fadeIn');
    if (btnMore.nodeName === 'BUTTON') {
        btnMore.insertAdjacentElement('beforebegin', newTab)
    }
    else {
        return
    }
}

window.addEventListener('click', addTabHandler);