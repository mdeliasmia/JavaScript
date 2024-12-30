let newTask = document.querySelector('input#new-task');
let form = document.querySelector('form');
let todoUI = document.querySelector('ul.items');
let completeUI = document.querySelector('.complete-list ul');

let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.className = 'item';
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}
let addTask = function (e) {
    e.preventDefault();
    let listItem = createTask(newTask.value);

    todoUI.appendChild(listItem);
    newTask.value = '';

    //bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}
let completeTask = function () {
    let listItem = this.parentNode;
    listItem.classList.add('space');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"');
    checkBox.remove();
    completeUI.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask)
}
let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
let bindInCompleteItems = function (taskItem, checkboxclick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxclick;
}
let bindCompleteItems = function (taskItem, deleteButtonClick) {
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deleteButtonClick;
}
for (let i = 0; i < todoUI.children.length; i++) {
    bindInCompleteItems(todoUI.children[i], completeTask);
}
for (let i = 0; i < completeUI.children.length; i++) {
    bindCompleteItems(completeUI.children[i], deleteTask);
}
form.addEventListener('submit', addTask);
//console.log(completeUI);