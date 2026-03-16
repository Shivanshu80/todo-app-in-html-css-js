const todoInput = document.querySelector('#todoInput');
const todoAddBtn = document.querySelector('#todoAddBtn');
const todoPrint = document.querySelector('#todoPrintPart2');
const deleteTodo = document.querySelector('#deleteTodo');
// selected elements

let inputVal = null
let allTodo = []
// global variables

function inputTarget(event) {
    inputVal = event.target.value
}
// input functionalty function

function todoAdd() {
    if (allTodo.includes(inputVal)) {
        alert('todo already exists')
        return
    }
    if (inputVal == null) {
        alert('enter todo');
        return
    }
    allTodo.push(inputVal);
    renderTodos();

}
// addTodo function

function renderTodos() {
    todoPrint.innerHTML = "";
    allTodo.forEach((v, i) => {
        todoPrint.innerHTML += `<li>
        <span>${i + 1}</span>
        ${v}
        <span onclick=removeTodo(${i})>x</span>
        </li>
        <br/>`;
    });
}
// printTodo function

function removeTodo(id) {
    allTodo = allTodo.filter((v, i) => i !== id);
    renderTodos();
}
renderTodos()
// delete todo function


todoInput.addEventListener('input', inputTarget);
todoAddBtn.addEventListener('click', todoAdd);
