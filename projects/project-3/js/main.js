function openForm() {
    document.getElementById('popupForm').style.display = "block";

    document.addEventListener('click', closeFormOutside);
}

function closeForm() {
    document.getElementById('popupForm').style.display = "none";

    document.removeEventListener('click', closeFormOutside);
}

// function closeFormOutside(e) {
//     const form = document.getElementById('popupForm');
//     if (!form.contains(e.target) && e.target !== document.getElementById('userBtn')) {
//         closeForm();
//     }
// } not working

// slider section

const slider = document.querySelector('.slider');
const slideItems = document.querySelectorAll('.slide');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentSlide = 1;
const size = slideItems[0].clientWidth;
slider.style.transform = 'translateX('+ (-size * currentSlide ) + 'px)';

nextBtn.addEventListener('click', () => {
    if (currentSlide >= slideItems.length-1) {
        return;
    }
    slider.style.transition = "transform 1.5s ease-in-out";
    currentSlide++;
    //console.log(currentSlide);
    slider.style.transform = 'translateX('+ (-size * currentSlide ) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (currentSlide <= 0) {
        return;
    }
    slider.style.transition = "transform 1.5s ease-in-out";
    currentSlide--;
    //console.log(currentSlide);
    slider.style.transform = 'translateX('+ (-size * currentSlide ) + 'px)';
})

slider.addEventListener('transitionend', () => {
    if (slideItems[currentSlide] && slideItems[currentSlide].id === 'lastClone') {
        slider.style.transition = 'none';
        currentSlide = slideItems.length - 2; // Adjust the index to the appropriate position
        slider.style.transform = 'translateX(' + (-size * currentSlide) + 'px)';
        console.log('none');
    }
    if (slideItems[currentSlide] && slideItems[currentSlide].id === 'firstClone') {
        slider.style.transition = 'none';
        currentSlide = slideItems.length - currentSlide; // Adjust the index to the appropriate position
        slider.style.transform = 'translateX(' + (-size * currentSlide) + 'px)';
        console.log('none');
    }
});
