const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(editBtn) {
    const li = editBtn.parentElement;
    const taskText = li.firstChild.textContent;
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        li.firstChild.textContent = newTaskText.trim();
    }
}

function deleteTask(deleteBtn) {
    const li = deleteBtn.parentElement;
    taskList.removeChild(li);
}
