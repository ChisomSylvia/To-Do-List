
const task = document.getElementById("task");
const dueDate = document.getElementById("date");
const addTask = document.getElementById("btn");
const toDos = document.getElementById("outputDiv");


addTask.addEventListener("click", function () {
    let para = document.createElement("p")
    para.innerText = `${dueDate.value}, ${task.value}`;
    toDos.appendChild(para);
    task.value = "";
    dueDate.value = "";
})
