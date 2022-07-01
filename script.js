const input = document.getElementById("task");
const button = document.querySelector(".btn");
const taskListItems = document.querySelector(".task-list-items ul");
const clearTasksBtn = document.querySelector(".clear-tasks");
// const deleteItemBtn = document.querySelector(".delete");

// Add task button
button.addEventListener("click", addTask);
// Clear tasks button
clearTasksBtn.addEventListener("click", () => {
  taskListItems.innerHTML = "";
});
// Remove task
taskListItems.addEventListener("click", deleteTask);

// Add task to list
function addTask(e) {
  // Check if user has entered a value
  if (!input.value) {
    alert("Enter task");
  }
  //   Create task and add it to list
  taskListItems.innerHTML += `
            <div class="item-wrap">
              <li class="task-item">${input.value}</li>
              <span class="delete">X</span>
            </div>
`;
  input.value = "";

  e.preventDefault();
}

// Delete task function
function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}
