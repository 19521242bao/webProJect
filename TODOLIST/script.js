//add action


function newToDoItem(itemText, completed) {
    var todoItem=document.createElement("li")
//tạo một liyếu tố để sử dụng làm mục danh sách mới của bạn.
    var todoText=document.createTextNode(itemText);
    //creates a text node 
    todoItem.appendChild(todoText);
    //kes the element, or text node, that you pass to it (in this case toDoText), and puts it inside toDoItem
    if(completed)
    {
        todoItem.classList.add("completed");
    }
    toDoList.appendChild(todoItem);
    todoItem.addEventListener("dblclick",toggleToDoItemState); 
}
function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);}
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}
function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}
function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}
function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}
function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
var addButton=document.getElementById("add-button");
var clearButton=document.getElementById("clear-completed-button")
var emptyButton=document.getElementById("empty-button")
var saveButton=document.getElementById("save-button")
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");
addButton.addEventListener("click", addToDoItem);
clearButton.addEventListener("click",clearCompletedToDoItems);
saveButton.addEventListener("click",saveList);
emptyButton.addEventListener("click",emptyList);

loadList();
