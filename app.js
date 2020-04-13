'use strict';

console.log('123')

//document.body.textContent = 'Hello';

// // anchor data to the parent element
var pEl = document.getElementById('movies');

// // create new element
// var liEl = document.createElement('li');

// // give new element some content
// liEl.textContent = 'This is my list of items.';

// // append the child element to the parent element
// pEl.appendChild(liEl);

var colors = ['red', 'black', 'yellow', 'blue', 'purple'];

for(var i = 0; i < colors.length; i++){
    // create element
    var liEl = document.createElement('li');
    // give it content
    liEl.textContent = `${colors[i]} is the Way`;
    // append the child to the parent
    pEl.appendChild(liEl);
}