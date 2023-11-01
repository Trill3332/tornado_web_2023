var h2Element = document.createElement('h2');
h2Element.textContent = 'List of TODOs';

var content = document.getElementById('content');
content.appendChild(h2Element);

var listOfTodos = ['HTML FUNCTIONS',
'JS Events',
'JS DOM create element HTML functions'];

var ulElement = document.createElement('ul');

for (let i = 0; i < listOfTodos.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = listOfTodos[i];
    ulElement.appendChild(liElement);
}
content.appendChild(ulElement);
