const input = document.getElementById("task");
const button = document.querySelector(".btn");
const taskListItems = document.querySelector(".task-list-items ul");
const clearTasksBtn = document.querySelector(".clear-tasks");

// EVENT LISTENERS
//load tasks from local storage
document.addEventListener("DOMContentLoaded", loadTasks);
// Add task button
button.addEventListener("click", addTask);
// Clear tasks button
clearTasksBtn.addEventListener("click", clearTasks);
// Remove task
taskListItems.addEventListener("click", deleteTask);

// FUNCTIONS
// Add task to list
function addTask(e) {
  // Check if user has entered a value
  if (!input.value) {
    alert("Enter task");
  } else {
    //   Create task and add it to list
    taskListItems.innerHTML += `
 <div class="item-wrap">
   <li class="task-item">${input.value}</li>
   <span class="delete">X</span>
 </div>
`;
    input.value = "";
  }

  // Commit task list to local storage
  localStorage.setItem("taskList", taskListItems.innerHTML);

  // Prevent default form submission
  e.preventDefault();
}

// Delete task function
function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    // Commit updated task list to local storage
    localStorage.setItem("taskList", taskListItems.innerHTML);
  }
}

// Load tasks from local storage
function loadTasks() {
  if (localStorage.getItem("taskList")) {
    taskListItems.innerHTML = localStorage.getItem("taskList");
  }
}

// Clear tasks
function clearTasks() {
  taskListItems.innerHTML = "";
  localStorage.clear();
}
