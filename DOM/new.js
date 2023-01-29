var newDiv = document.createElement('div');
newDiv.className = 'extraDiv';
newDiv.id = 'extraDiv2';
var newDivText = document.createTextNode('HEllo word');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
//putting new element before item1

var pnode = document.querySelector('.list-group');
pnode.innerHTML = '<li>HEllo word</li>' + pnode.innerHTML;