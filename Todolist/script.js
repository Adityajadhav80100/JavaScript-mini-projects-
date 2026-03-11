// Modern To-Do List functionality
const form = document.querySelector('form');
const input = document.getElementById('task');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const task = input.value.trim();
	if (task) {
		addTask(task);
		input.value = '';
	}
});

function addTask(task) {
	const li = document.createElement('li');
	// Task text span
	const taskSpan = document.createElement('span');
	taskSpan.textContent = task;
	taskSpan.style.flex = '1';
	li.appendChild(taskSpan);

	// Complete button
	const completeBtn = document.createElement('button');
	completeBtn.textContent = 'Done';
	completeBtn.className = 'complete-btn';
	completeBtn.style.marginRight = '8px';
	completeBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		li.classList.toggle('completed');
	});
	li.appendChild(completeBtn);

	// Delete button
	const delBtn = document.createElement('button');
	delBtn.textContent = 'Delete';
	delBtn.className = 'delete-btn';
	delBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		li.remove();
	});
	li.appendChild(delBtn);

	list.appendChild(li);
}
