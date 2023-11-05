const page = document.querySelector('.page');
const left = document.querySelector('.ps');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', function() {
    page.classList.add('hover-left');
})
left.addEventListener('mouseleave', function() {
    page.classList.remove('hover-left');
})

right.addEventListener('mouseenter', function() {
    page.classList.add('hover-right');
})
right.addEventListener('mouseleave', function() {
    page.classList.remove('hover-right');
})