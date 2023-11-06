console.log('Lesson day 21 - JS DOM this keyword');
const myColors = ['red','green','blue','yellow','orange'];
let contentHeader = document.createElement('h2');
contentHeader.textContent = 'My Favorite Colors';

let content = document.getElementById('content');
content.appendChild(contentHeader);

let ulTag = document.createElement('ul');
for ( let i = 0; i < myColors.length; i++) {
    let liTag = document.createElement('li');
    liTag.textContent = myColors[i];
    liTag.addEventListener('click', changeColor);
    ulTag.appendChild(liTag);
}
content.appendChild(ulTag);

function changeColor(e) {
    console.log(e);
    e.target.style.color = e.target.textContent;
}

let queryElements = document.querySelectorAll('li');
console.log(queryElements);
let qElements = document.getElementsByTagName('li');
console.log(qElements);

function textDecorate(e) {
    if (e.hasAttribute('style')) {
        e.removeAttribute('style');
    } else {
        e.style.textDecoration = 'line-through';
    }
}

