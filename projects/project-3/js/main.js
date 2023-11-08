let userBtn = document.querySelector('#userBtn');

console.log(userBtn);
let closeBtn = document.querySelector('.closeBtn')

let modal = document.querySelector('.sign-in-section');


userBtn.addEventListener('click', () => {
    modal.classList.toggle('show');
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
})

