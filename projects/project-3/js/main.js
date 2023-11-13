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

let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementsByClassName('slider');
    const slides = document.getElementsByClassName('slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    for (let i = 0; i < slides.length; i++) {
        if (i === currentSlide) {
            slides[i].style.display = 'block';
        } else {
            slides[i].style.display = 'none';
        }
        const translateValue = -currentSlide * 100 + '%' ;
        slider[i].setAttribute('style', 'transform:translateX(' + translateValue + ')');
    } 
}
function prevSlide() {
    showSlide(currentSlide - 1);
}
function nextSlide() {
    showSlide(currentSlide + 1);
}