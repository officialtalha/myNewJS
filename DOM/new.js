var newDiv = document.createElement('div');
newDiv.className = 'extraDiv';
newDiv.id = 'extraDiv2';
var newDivText = document.createTextNode('HEllo word');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
//putting new element before item1

/*var newEl = document.createElement('li');
newEl.className = 'list-group-item';
var newDivText2 = document.createTextNode('HEllo word');
newEl.appendChild(newDivText2);
var a = document.querySelector('.list-group');
a.insertBefore(newEl, );*/