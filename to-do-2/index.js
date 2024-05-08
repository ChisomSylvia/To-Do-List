
const inputBox = document.getElementById("inputBox");
const dueDate = document.getElementById("date");
const taskList = document.getElementById("taskList");

//Add Task Function
function addTask() {
    if (inputBox.value === '' || dueDate.value === '') {
    //if (inputBox.value === "") { 
        alert("Enter Your To Dos!");
    } 
    else {
        let list = document.createElement("li");
        list.innerHTML = `${dueDate.value} ${inputBox.value}`;
        taskList.appendChild(list);

        let del = document.createElement("span");
        del.innerHTML = "\u00d7"
        list.appendChild(del);
    }

    inputBox.value = "";
    dueDate.value = "";

    saveTask()
}

// click function
taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask()
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask()
    }
    else {
        false;
    }
})

// To save already created list
function saveTask() {
    localStorage.setItem("task", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("task");
}
showTask()