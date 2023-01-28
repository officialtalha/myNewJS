var a = document.getElementById('header-title');
a.textContent = 'Talha';
a.style.border = 'solid 3px black';
var b = document.getElementById('Additems');
b.style.fontWeight = 'bold';
b.style.color = 'green';
var c = document.querySelectorAll('.list-group-item');
c[1].style.color = 'green';
for (var i=0; i<c.length; i=i+2)
{
    c[i].style.backgroundColor = 'green';
}