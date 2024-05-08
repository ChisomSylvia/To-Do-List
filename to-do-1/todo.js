
function createTodoItem(text) {
    return {
        id: Date.now(),
        text: text,
        completed: false
    };
}

function renderTodoList(todos) {
    let todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    todos.forEach(function(todo) {
        let li = document.createElement("li");
        li.innerText = todo.text;
        li.dataset.id = todo.id;
        if (todo.completed) {
            li.style.textDecoration ="line-through";
        }
        li.addEventListener("click", toggleTodo);
        todoList.appendChild(li);
    });
}

function addTodo() {
    let input = document.getElementById("todoInput");
    let text = input.value.trim();
    if (text !== "") {
        todos.push(createTodoItem(text));
        renderTodoList(todos);
        input.value = "";
    }
}

//Toggle todo item cpmpletion
function toggleTodo(event) {
    let id = parseInt(event.target.dataset.id);
    let index = todos.findIndex(function (todo) {
        return todo.id === id;
    });
    if (index !== -1) {
        todos[index].completed = !todos[index].completed;
        renderTodoList(todos);
    }
}

//Todo List
const todos = [];