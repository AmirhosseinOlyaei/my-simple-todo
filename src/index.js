


function addTask() {
  // get all the elements that we need in javascript
  // get the value of the input element and save as a variable
  const task = document.getElementById("task").value;
  const todoList = document.getElementById("todoList");
  const newTask = document.createElement("li");
  newTask.innerHTML = task + " <button onclick='deleteTask(this)'>Delete</button>";
  
  // show in the HTML list section each item in list
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

  // Add a single item to the table
  todoList.appendChild(newTask);
  document.getElementById("task").value = "";
}

// Remove single item from the list
function deleteTask(task) {
  task.parentElement.parentElement.remove();
}

