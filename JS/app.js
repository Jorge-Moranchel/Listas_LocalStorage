const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', loadTasks);

taskForm.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        saveTasks();
    }
});

taskList.addEventListener('click', function(evento) {
    if (evento.target.tagName === 'LI') {
        evento.target.classList.toggle('completed');
        saveTasks();
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;
    taskList.appendChild(li);
}

function saveTasks() {
    localStorage.setItem('myTasks', taskList.innerHTML);
}

function loadTasks() {
    const savedTasks = localStorage.getItem('myTasks');

    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
}

