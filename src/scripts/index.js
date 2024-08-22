function addTabHandler(evt) {
    let btnMore = evt.target;
    let newTab = document.createElement('a');
    newTab.href="#";
    newTab.classList.add('tab__item', 'animate__animated', 'animate__fadeIn');
    btnMore.insertAdjacentElement('beforebegin', newTab)
}

window.addEventListener('click', addTabHandler);