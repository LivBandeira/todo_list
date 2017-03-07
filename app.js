let myNodelist = document.getElementsByTagName('LI');

for (let i = 0; i < myNodelist.length; i++) {
    let button = document.createElement('button');
    let txt = 'delete';

    button.className = 'remove';
    button.innerHTML = txt;

    myNodelist[i].appendChild(button);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName('remove');

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
    };
}

// Add a 'checked' symbol when clicking on a list item
let list = document.querySelector('ol');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the 'Add' button
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('addTodoItem').value;
    let t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        document.getElementById('todoList').appendChild(li);
    }

    document.getElementById('addTodoItem').value = '';

    let button = document.createElement('button');
    let txt = 'delete';

    button.className = 'remove';
    button.innerHTML = txt;

    li.appendChild(button);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        };
    }
}

document.getElementById('addTodo').addEventListener('click', newElement);


