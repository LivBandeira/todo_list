/#global localStorage

function getTodos() {
    let todos = [];
    let storage = localStorage.getItem('todo');

    if (storage != 'null') {
        todos = JSON.parse(storage);
    }

    return todos;
}

function add(evt, inputValue) {
    if (!inputValue) {
        inputValue = document.getElementById('addTodoItem').value;
    }

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let button = document.createElement('button');
        button.id = document.querySelectorAll('#todoList button').length;
        button.innerHTML = 'delete';
        button.onclick = function() {
            let id = this.getAttribute('id');
            let todos = getTodos();

            todos.splice(id, 1);
            localStorage.setItem('todo', JSON.stringify(todos));

            document.getElementById('todoList').removeChild(this.parentElement);
        };

        let li = document.createElement('li');
        li.innerHTML = inputValue;
        li.onclick = function() {
            this.classList.toggle('checked');
        };
        li.appendChild(button);

        document.getElementById('todoList').appendChild(li);

        let todos = getTodos();
        todos.push(inputValue);
        localStorage.setItem('todo', JSON.stringify(todos));

        document.getElementById('addTodoItem').value = '';
    }

}

(function() {
    let todos = getTodos();

    localStorage.setItem('todo', null);

    for (let i = 0; i < todos.length; i++) {
        add(null, todos[i]);
    }

    document.getElementById('addTodo').addEventListener('click', add);
})();