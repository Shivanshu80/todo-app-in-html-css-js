const todoInput = document.querySelector('#todoInput');
const todoAddBtn = document.querySelector('#todoAddBtn');
const todoPrint = document.querySelector('#todoPrintPart2');

let allTodo = [];

function todoAdd() {
    const value = todoInput.value.trim();

    if (!value) {
        alert('Enter todo');
        return;
    }

    if (allTodo.find(todo => todo.text === value)) {
        alert('Todo already exists');
        return;
    }

    allTodo.push({ text: value, completed: false });
    todoInput.value = "";
    renderTodos();
}

function completeTask(id) {
    allTodo[id].completed = !allTodo[id].completed;
    renderTodos();
}

function removeTodo(id) {
    allTodo = allTodo.filter((_, i) => i !== id);
    renderTodos();
}

function renderTodos() {
    todoPrint.innerHTML = "";

    allTodo.forEach((todo, i) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${i + 1}</span>
            <p style="${todo.completed ? 'background:red;' : ''}">
                ${todo.text}
            </p>
            <span style="cursor:pointer;">x</span>
        `;

        // Add events
        li.querySelector('p').addEventListener('click', () => completeTask(i));
        li.querySelector('span:last-child').addEventListener('click', () => removeTodo(i));

        todoPrint.appendChild(li);
    });
}

todoAddBtn.addEventListener('click', todoAdd);

renderTodos();