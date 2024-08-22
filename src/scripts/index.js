function addTabHandler(evt) {
    let btnMore = evt.target;
    let newTab = document.createElement('a');
    newTab.href="#";
    newTab.classList.add('tab__item', 'animate__animated', 'animate__fadeIn');
    console.log(btnMore.parentElement)
    btnMore.insertAdjacentElement('beforebegin', newTab)
}

window.addEventListener('click', addTabHandler);