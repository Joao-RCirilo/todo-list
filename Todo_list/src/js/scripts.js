  //seleção de elementos
  const formularioTodo = document.querySelector("#formulario-todo");
  const inputTodo = document.querySelector("#input-todo");
  const todoList = document.querySelector("#todo-list");
  const editForm = document.querySelector("#edit-form");
  const editTodo = document.querySelector("#edit-input");
  const btnCancelEdit = document.querySelector("#botao-cancelar-edicao");
  
  //funções
  const saveTodo = (text) => {
    //cria o template da tarefa
    //cria a div geral(externa)
  const todo = document.createElement("div");
  todo.classList.add("todo");
  //cria o título
  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);
  
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);
  
  todoList.appendChild(todo);
  
  };
  //eventos
  formularioTodo.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    
    //pegar o valor do input pra criar a nova tarefa
  const inputValue = inputTodo.value;
  
  if (inputValue) {
    //salva o todo
    saveTodo(inputValue);  
  }
  });