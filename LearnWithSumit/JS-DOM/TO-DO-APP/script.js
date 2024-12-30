//console.log(document);
//console.log(typeof document);
//console.dir(document);


/* Class-3 */
// let lastItem=document.querySelector('.item:first-child');
// console.log(lastItem.style.color='red');

// let lastItems=document.querySelectorAll('.item');
// console.log(lastItems);

// let lastItems=document.querySelectorAll('.item');
// for(let i of lastItems){
//     i.style.color='red';
//     console.log(i);
// }

// let lastItems=document.querySelectorAll('.item:last-child');
// for(let i of lastItems){
//     i.style.color='red';
//     console.log(i);
// }

// let lastItems = dcument.querySelector('.item:nth-child(2)');

// lastItems.style.color = 'red';
// console.log(lastItems);

// let lastItems=document.querySelectorAll('.item:nth-child(2)');
// for(let i of lastItems){
//     i.style.color='red';
//     console.log(i);
// }




/* Class-4 Traversing DOM */
/*
let items = document.querySelector('#items');
console.log(items);
console.log(items.children);
items.style.color='red';
var x=items.children;
for(var i of x){
    console.log(i.style.color='orange');
}*/

//GrandParent-child relation
/*const grandParent=document.querySelector('.todo-list');
console.log(grandParent);
// const parent=grandParent.children;
// console.log(parent)
// const children=parent[1].children;
// console.log(children);

// const childern=grandParent.querySelector('.item');
// console.log(childern);
*/

//Childern to GrandParents
/*
const childern = document.querySelector('.item');
console.log(childern);
const parent = childern.parentElement;
console.log(parent);
const parent1 = childern.parentNode;
console.log(parent1);
const grandParent=childern.closest('.todo-list');
console.log(grandParent);
*/

//NextSibling
/*
const childern1 = document.querySelector('.item');
console.log(childern1);
const childern2 = childern1.nextElementSibling
console.log(childern2);
*/

//PreviousSibling
/*
const childern2 = document.querySelector('.item').nextElementSibling;
console.log(childern2);
const childern1 = childern2.previousElementSibling;
console.log(childern1);
*/


/* Class-5 Manipulate DOM */
/*
const divElement=document.createElement('div');
//console.log(divElement);

divElement.className='red';
divElement.setAttribute('id','red1');
divElement.setAttribute('title','Red Div');
divElement.style.background='red';
divElement.textContent="Red Div";
console.log(divElement);

const container=document.querySelector('.todo-list');
console.log(container);
const h2Element=container.querySelector('h2');
console.log(h2Element);

//container.insertBefore(divElement,h2Element);

container.appendChild(divElement);// node must
//container.append(divElement);
container.append("Hello world");//support multi parameter
container.append(divElement,document.createElement('p'),"Hello world",);//support multi parameter
container.appendChild(divElement,document.createElement('p'),"Hello world",);//support multi parameter
console.log(container);
*/



/* Class-6 Event Listening to DOM  */
/*
const headerElement=document.querySelector('#header');
console.log(headerElement);
// headerElement.addEventListener('click',(e)=>{
//     console.log(e);
// });
headerElement.addEventListener("dblclick",(e)=>{
    console.log(e);
});
//https://www.w3schools.com/jsref/dom_obj_event.asp
*/

/* Class-7 DOM Project  */

//select element & assingn theme
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUL = document.querySelector('#items');
let completeUL = document.querySelector('.complete-list ul');

// functions
let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innerHTML = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = (e) => {
    e.preventDefault();
    let listItem = createTask(newTask.value);
    todoUL.appendChild(listItem);
    newTask.value = "";
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
    let listItem = this.parentNode;
    //console.dir(listItem);
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUL.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
let bindInCompleteItems = (taskItem, checkboxClick) => {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}
let bindCompleteItems = (taskItem, deleteButtonClick) => {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}
for(var i=0; i<todoUL.children.length;i++){
    bindInCompleteItems(todoUL.children[i],completeTask);
}
for(var i=0; i<completeUL.children.length;i++){
    bindCompleteItems(completeUL.children[i],deleteTask);
}
form.addEventListener('submit', addTask);