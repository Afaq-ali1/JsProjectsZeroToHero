let todoInput = document.querySelector("#todo-input");
let todoDate = document.querySelector("#date-input");
let todoContainer = document.querySelector("#container");
let Arr = [
  {
    item: "pahla",
    date: "2024-1-22"
  },
  {
    item: "doosra",
    date: "2024-1-22"
  },
];
displayTodo();
function displayTodo() {
  todoContainer.innerHTML = "";
  for (let i = 0; i < Arr.length; i++) {
    todoContainer.innerHTML += `
    <span> ${i + 1}. ${Arr[i].item}</span>
    <span> ${Arr[i].date}</span> <button   onclick="Arr.splice(${i}, 1);
    displayTodo();">delete</button>

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
