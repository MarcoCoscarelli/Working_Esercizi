document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const tasks = [];

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const task = {
                id: Date.now(),
                text: taskText
            };
            tasks.push(task);
            renderTask(task);
            taskInput.value = '';
        }
    }

    function renderTask(task) {
        const li = document.createElement('li');
        li.className = 'task';
        li.dataset.id = task.id;
        
        const span = document.createElement('span');
        span.className = 'task-content';
        span.textContent = task.text;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Rimuovi';
        removeBtn.addEventListener('click', () => {
            removeTask(task.id);
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    function removeTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks.splice(index, 1);
            const taskElement = taskList.querySelector(`[data-id="${id}"]`);
            taskList.removeChild(taskElement);
        }
    }
});
