var form = document.getElementById('form1');
var totalItems = document.getElementById('items');
var filterItems = document.getElementById('filter');

form.addEventListener('submit', addItems);
totalItems.addEventListener('click', removeItems);
filterItems.addEventListener('keyup', filterMethod);

function addItems(e) {
    e.preventDefault();

    var newItem = document.getElementById('input1').value;
    var newItem2 = document.getElementById('input2').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem + ' '));
    li.appendChild(document.createTextNode(newItem2));
    totalItems.appendChild(li);
    //adding edit button
    var edtBtn = document.createElement('button');
    edtBtn.className = 'btn btn-primary btn-sm float-right edit';
    edtBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(edtBtn);
    //adding remove button 
    var dlBtn = document.createElement('button');
    dlBtn.className = 'btn btn-danger btn-sm float-right delete';
    dlBtn.appendChild(document.createTextNode('remove'));
    li.appendChild(dlBtn);
    
}

function removeItems(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are You Sure?")) {
            var li = e.target.parentElement;
            totalItems.removeChild(li);
        }
    }
}

function filterMethod(e){
    var alpha = e.target.value.toLowerCase();
    var items = totalItems.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        
        const itemName = item.childNodes[0].textContent;
        const description = item.childNodes[1].textContent;
        
        if(itemName.toLowerCase().indexOf(alpha) != -1 || description.toLowerCase().indexOf(alpha) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });   
}