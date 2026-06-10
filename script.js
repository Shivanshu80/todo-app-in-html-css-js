const writeTodo = document.querySelector('#writeTodo');
const addTodo = document.querySelector('#addTodo');
const showTodo = document.querySelector('#showTodo');

let todoVal = ''
let todoList = []

const inputVl = () => {
    todoVal = writeTodo.value
}

const addTodList = () => {
    if(writeTodo.value == ''){
        alert('Please enter todo')
        return
    }
    if (todoList.includes(todoVal)) {
        alert('Todo all ready exists')
        return
    }
    todoList.push(todoVal)
}

const renderTodo = () => {
    let finalTodo = todoList.map((v, i) => {
        let li = ''
        return li += `<li> <span>${i + 1}</span> <p>${v}</p> <span onClick=removeTodo(${i})>x</span> </li>`
    })
    showTodo.innerHTML = finalTodo
    writeTodo.value = ''
}

const addTodos = () => {
    addTodList()
    renderTodo()
}

const removeTodo = (index) => {
    todoList.splice(index, 1)
    renderTodo()
    writeTodo.value = ''
}

addTodo.addEventListener('click', addTodos)
writeTodo.addEventListener('input', inputVl)