


function addTask() {
  const task = document.getElementById("task").value;
  const todoList = document.getElementById("todoList");
  const newTask = document.createElement("li");
  newTask.innerHTML = task + " <button onclick='deleteTask(this)'>Delete</button>";
  
  newTask.innerHTML =`
  <div class="flex flex-row justify-between items-center w-full border p-3">              

      <div class="flex">
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </div>
          <div>
          ${task}
          </div>
      </div>
      <div>
      <button onclick='deleteTask(this)'>Delete</button>
      </div>
  </div>
  `
  
  todoList.appendChild(newTask);
  document.getElementById("task").value = "";
}
function deleteTask(task) {
  task.parentElement.parentElement.remove();
}

