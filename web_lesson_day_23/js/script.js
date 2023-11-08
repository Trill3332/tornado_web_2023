let container = document.getElementById('container');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
container.appendChild(div1);
container.appendChild(div2);
div1.setAttribute('id', 'div1');
div1.setAttribute('class', 'my-class');
div1.setAttribute('style', 'background-color: yellow;');
div1.textContent = 'Element 1 ';
div2.setAttribute('id', 'div2');
div2.setAttribute('class', 'my-class');
div2.setAttribute('style', 'background-color: orange;');
div2.textContent = 'Element 2 ';

