let todoInput = document.querySelector("#todo-input");
let todoDate = document.querySelector("#date-input");
let todoContainer = document.querySelector("#container");
let enterButton=document.querySelector('#enterBtn')
let Arr = [
  {
    item: "first",
    date: "2024-01-22"
  },
  {
    item: "second",
    date: "2024-01-22"
  },
];
displayTodo();
function displayTodo() {
  todoContainer.innerHTML = "";
  for (let i = 0; i < Arr.length; i++) {
    todoContainer.innerHTML += `
    <span> ${i + 1}. ${Arr[i].item}</span>
    <span> ${Arr[i].date}</span> <button id="delBtn"  onclick="Arr.splice(${i}, 1);
    displayTodo();">Delete</button>

    `;
  }
}
function addTodo() {
  let todoAdd ={
    item: todoInput.value,
   date: todoDate.value};
  Arr.push(todoAdd);
  displayTodo();
}

enterButton.addEventListener("click",()=>
{
  displayTodo();
  addTodo();
});
  
