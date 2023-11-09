let userBtn = document.querySelector('#userBtn');

console.log(userBtn);
let closeBtn = document.querySelector('.closeBtn')

let modal = document.querySelector('.sign-in-section');

let dropDownMenu = document.querySelector('.dropDownMenu');

let dropDownModal = document.querySelector('.dropDown')

userBtn.addEventListener('click', () => {
    modal.classList.toggle('show');
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
})

dropDownMenu.addEventListener('mouseover', () => {
    dropDownModal.classList.toggle('show');
})
