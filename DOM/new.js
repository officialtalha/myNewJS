var a = document.getElementById('header-title');
a.textContent = 'Talha';
a.style.border = 'solid 3px black';
var b = document.getElementById('Additems');
b.style.fontWeight = 'bold';
b.style.color = 'green';
var c = document.getElementsByClassName('list-group-item');
c[2].style.backgroundColor = 'green';
for (var i=0; i<c.length; i++)
{
    c[i].style.fontWeight = 'bold';
}
var d = document.getElementsByTagName('li');
d[4].style.color = 'red';

var e = document.querySelector('.anotherClass');
e.style.backgroundColor = 'black';