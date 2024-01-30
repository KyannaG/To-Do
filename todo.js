const form = document.querySelector("form");
const taskList = document.querySelector("#task-list");

const buttons = document.querySelectorAll("li button");

for (let button of buttons) { 
    button.addEventListener("click", function(event) {
       event.target.parentElement.remove();
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTaskInput = document.querySelector("#task");
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");
    newLi.innerText = newTaskInput.value;
    newButton.innerText = "Done";

    newLi.append(newButton);
    taskList.append(newLi);
    form.reset();
});

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});

//const tasks = document.querySelector("#task.value");
const tasks = taskList;

localStorage.setItem("taskList",tasks);
localStorage.getItem(tasks);