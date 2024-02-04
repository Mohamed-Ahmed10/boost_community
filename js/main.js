var toggler = document.getElementById('toggler'),
    sideContent = document.getElementById("side_content");

toggler.addEventListener('click', function () {
    sideContent.classList.toggle('show')
    if (this.children[1].classList.contains('hidden_icon')) {
        this.children[1].classList.remove('hidden_icon')
        this.children[0].classList.add('hidden_icon')
        // this.children[1].style.display = 'initial'
        // setTimeout(() => {
        //     this.children[0].style.display = 'none'
        // }, 800)
    }
    else {
        this.children[0].classList.remove('hidden_icon')
        this.children[1].classList.add('hidden_icon')

        // this.children[0].style.display = 'initial'
        // setTimeout(() => {
        //     this.children[1].style.display = 'none';
        // }, 800)
    }
    // sideContent.parentElement.classList.toggle('col-3')
    // sideContent.parentElement.classList.toggle('col-1')
})

function hiddenHandler(index) {
    this.children[index].style.display = 'none'

}