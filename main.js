let openBtn = document.querySelector('#open-btn');
let closeBtn = document.querySelector('#close-btn');
let modal = document.querySelector('.modal');

openBtn.addEventListener('click', function() {
    modal.classList.add('active');
})

closeBtn.onclick = function() {
    modal.classList.remove('active')
}