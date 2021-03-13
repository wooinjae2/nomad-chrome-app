const todoForm = document.querySelector('.js-toDoForm'),
  todoInput = todoForm.querySelector('input'),
  todoList = document.querySelector('.js-todoList');

let toDos = [];

function paintTodo(text) {
  const li = document.createElement('li');
  console.log('todos length', toDos);
  const newId = toDos.length + 1;
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  li.id = newId;
  span.innerHTML = text;
  delBtn.addEventListener('click', (e) => {
    console.log(e.target.parentNode.id);
    const cleanTodos = toDos.filter((item) => 
    item.id !== parseInt(e.target.parentNode.id))
    console.log('clean Todos ', cleanTodos);
    localStorage.setItem('toDos', JSON.stringify(cleanTodos));
    todoList.removeChild(e.target.parentNode);
    toDos = cleanTodos;
  });

  toDos.push({
    task: text,
    id: newId
  })
  localStorage.setItem('toDos', JSON.stringify(toDos));
  delBtn.innerText = 'X'
  li.appendChild(delBtn);
  li.appendChild(span);
  todoList.appendChild(li);
  todoInput.value = '';
}

function handleSubmit(e) {
  e.preventDefault();
  paintTodo(todoInput.value);

  console.log(todoInput.value);
}
//배열에 추가했다 배열에 추가하는 이유 
//id 없이도 삭제 할수 있는데 id를 추가하는 이유

function init() {
  const localTodos = localStorage.getItem('toDos');

  if (localTodos) {
    JSON.parse(localTodos).forEach((item) => {
      paintTodo(item.task)
    })
  }
  todoForm.addEventListener('submit', handleSubmit)
}

init()
