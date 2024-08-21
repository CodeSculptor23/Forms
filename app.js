var username = document.getElementById('username');
var email = document.getElementById('email');
var age = document.getElementById('age');
var password = document.getElementById('password');
var tbody = document.querySelector('tbody');

function add(){
    var tableitem = document.createElement('tr');
    tableitem.innerHTML = '<td>'+username.value+'</td>' + '<td>'+age.value+'</td>' + '<td>'+email.value+'</td>' + '<td>'+"*******"+'</td>' + '<td><button class="delete-btn">Delete</button></td>';
    tbody.appendChild(tableitem);

    var deleteButton = tableitem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function()
{
    tbody.removeChild(tableitem)
})

document.getElementById('form').reset();

return false;



}