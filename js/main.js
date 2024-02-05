var toggler = document.getElementById('toggler'),
    sideContent = document.getElementById("side_content");

toggler.addEventListener('click', function () {

    [...toggler.children].forEach(sib => sib.classList.toggle('hidden_icon'))

    sideContent.classList.toggle('show')
    sideContent.classList.toggle('hide')
})

function hiddenHandler(index) {
    this.children[index].style.display = 'none'

}