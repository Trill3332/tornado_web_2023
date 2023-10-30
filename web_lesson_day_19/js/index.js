var stringArray = ['one','two','three','four'];
console.log(stringArray[1]);
for ( let i = 0; i < stringArray.length;i++) {
    console.log(stringArray[i]);
}
var numArray = [1,2,3,4,5,6,7,8,9,10];
for ( let i = 0; i < numArray.length;i++) {
    console.log(numArray[i]);
}
numArray[3] = 14;
console.log(numArray[3]);
var max = 0;
var maxIndex = 0;
for ( let i = 0 ; i < numArray.length; i++) {
    if (numArray[i] > max) {
        max = numArray[i];
        maxIndex = i;
    }
}
console.log(max);
console.log(maxIndex);
var content = document.getElementById('content');
content.innerHTML = 'hello world';
var ulElement = document.createElement('ul');
content.appendChild(ulElement);
var liElement = document.createElement('li');
liElement.innerHTML = 'One';
ulElement.appendChild(liElement);