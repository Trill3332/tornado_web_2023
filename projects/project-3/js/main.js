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

let currentSlideIndex = 0;
const slider = document.getElementsByClassName('slider');
const slides = document.getElementsByClassName('slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    const translateValue = -currentSlideIndex * 0 + '%';

    for (let i = 0; i < slides.length; i++) {
        if (i === currentSlideIndex) {
            slides[i].style.display = 'block';
            // slides[i].style.transform = 'translateX(' + translateValue + ')';
            slider[0].setAttribute('style', 'transform:translateX(' + translateValue + ')');
        } else {
            slides[i].style.display = 'none';
        }
    }
   

}
function prevSlide() {
    showSlide(currentSlideIndex - 1);
}
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}