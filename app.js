let inputbox = document.querySelector('#inputbox');
let list = document.querySelector('#list');

inputbox.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        addItem(this.value);
        this.value = "";
        saveData();
    }
});

list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        toggleDone(event.target);
    } else if (event.target.tagName === "I") {
        removeItem(event.target.parentElement);
    }
});

let addItem = (taskDescription) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${taskDescription}<i></i>`;
    
    list.appendChild(listItem);
    saveData();
};

function toggleDone(task) {
    task.classList.toggle('done');
    saveData();
}

function removeItem(task) {
    task.remove();
    saveData();
}

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showtask() {
    let savedData = localStorage.getItem("data");
    if (savedData) {
        list.innerHTML = savedData;
    }
}

showtask();
