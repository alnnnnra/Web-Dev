const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTodoItem(text);
    input.value = '';
  }
});

function addTodoItem(text) {
  const todo = {
    id: Date.now(),
    text: text,
    done: false
  };
  todos.push(todo);
  renderTodoList();
}

function toggleTodoItem(id) {
  const todo = todos.find(todo => todo.id === id);
  todo.done = !todo.done;
  renderTodoList();
}

function deleteTodoItem(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodoList();
}

function renderTodoList() {
  list.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input type="checkbox" ${todo.done ? 'checked' : ''}>
        ${todo.text}
      </label>
      <button class="delete-button">
        <img src="trashcan.png" alt="Delete">
      </button>
    `;
    li.querySelector('input').addEventListener('change', () => toggleTodoItem(todo.id));
    li.querySelector('.delete-button').addEventListener('click', () => deleteTodoItem(todo.id));
    if (todo.done) {
      li.classList.add('done');
    }
    list.appendChild(li);
  });
}

