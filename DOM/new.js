//using submit
 var forForm = document.getElementById('form1');
 var forUl = document.getElementById('items');
 
 forForm.addEventListener('submit', abc);
 forUl.addEventListener('click', xyz);

 function xyz(f){
    f.preventDefault();
    if(f.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            var li = f.target.parentElement;
            forUl.removeChild(li);
        }
    }
 }


 function abc(e) {
    e.preventDefault();

    var textSome = document.getElementById('input1').value;

    var newItem = document.createElement('li');
    newItem.className = 'list-group-item';

    newItem.appendChild(document.createTextNode(textSome));

    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('Delete'));

    var btnedit = document.createElement('button');
    btnedit.className = 'btn btn-primary btn-sm float-right edit';
    btnedit.appendChild(document.createTextNode('Edit'));

    newItem.appendChild(btnedit);
    newItem.appendChild(deletebtn);

    forUl.appendChild(newItem);
    
}
