const input = document.querySelector("#input");
function focusInput() {
    input.focus();
}
window.addEventListener("load", focusInput);


let h1 = document.querySelector("h1");
let hour = new Date().getHours();

let greeting = (msg) => {
    h1.innerText = msg;
}

if (hour >= 18) greeting("Good evening 🌙");
else if (hour >= 12) greeting("Good afternoon ☀️");
else if (hour < 12) greeting("Good morning ☀️");
else greeting("Hello");


let numToDos = 0;
const todos = document.querySelector("#todos")
const form = document.querySelector("form");
const starterText = document.querySelector(".right p");

form.addEventListener("submit", function addItem(e) {
    // prevents the todo input from redirecting to another page 
    e.preventDefault();
    // takes the value of whatever is typed inside the input
    const todo = input.value;
    // prevents blank todo from being added to the list
    if (todo.length == 0){
        alert("Please enter a to-do");
    }
    else {
        const todoItem = document.createElement("div");
        todoItem.className = "test-button"
        todoItem.innerText = todo;
        todos.insertBefore(todoItem, todos.firstChild);

        input.value = '';
        starterText.style.display = "none";
        numToDos++;
        focusInput();
    }
});

todos.addEventListener("click", function deleteItem(e) {
    e.target.className= "test-button" && e.target.remove();
    numToDos--;
    if (numToDos == 0) {
        starterText.style.display = "block";
        starterText.innerText = "Woo hoo! All tasks completed!";
    }
});

todos.addEventListener("click", function(e) {
    console.log(e.target.nodeName);
})
