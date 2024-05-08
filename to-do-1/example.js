// Create a simple todo list using arrays and array methods

// Initialize an empty array to store the tasks
const todoList = [];

// Function to add a new task to the todo list
function addTask(task) {
  todoList.push(task);
  console.log('Task "${task}" added to the todo list.');
}

// Function to remove the first task from the todo list
function removeTask() {
  if (todoList.length > 0) {
    const removedTask = todoList.shift();
    console.log(`Task ${removedTask} removed from the todo list.`);
  } else {
    console.log("Todo list is empty.");
  }
}



// Add tasks to the todo list
addTask("Buy groceries");
addTask("Finish homework");
addTask("Go for a run");

// Display the current todo list
console.log("Current Todo List:");
console.log(todoList);

// Remove a task from the todo list
removeTask();

// Display the updated todo list after removing a task
console.log("Updated Todo List:");
console.log(todoList);