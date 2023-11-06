const progressBar = document.querySelector('.progressBar');
const circles = document.querySelectorAll('.circle');
const bars = document.querySelectorAll('.bar');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let currentActive = 1;
let barsActive = 0;
next.addEventListener('click', function() {
    currentActive++;
    barsActive++;
    if (currentActive > circles.length && barsActive > bars.length) {
        currentActive = circles.length;
        barsActive = bars.length;
    }
    update();
    updateBars();
})
prev.addEventListener('click', function() {
    currentActive--;
    barsActive--;
    if (currentActive < 1 && barsActive < 1) {
        currentActive = 1;
        barsActive = 1;
    }
    update();
    updateBars();
})
function update() {
    circles.forEach((circle,index) => {
        if(index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
}

function updateBars() {
    bars.forEach((bar,index) => {
        if (index < barsActive) {
            bar.classList.add('barActive');
        }   else {
            bar.classList.remove('barActive');
        }
    })
}




