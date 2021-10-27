console.log('Fuck');
console.log(document);
console.dir(document);

// getElementById

const main_heading = document.getElementById('main-heading');
console.log(main_heading);

// getElementByQuerySelector

const main_heading2 = document.querySelector('#main-heading');
console.log(main_heading2);

const header = document.querySelector('.header');
console.log(header);

const nav_item = document.querySelector('.nav-item');
console.log(nav_item);

const nav = document.querySelectorAll('.nav-item');
console.log(nav);

// Change texts

const main_heading3 = document.getElementById('main-heading');
console.log(main_heading3.textContent);
// main_heading3.textContent = "using textContent property";
console.log(main_heading3.textContent);

// change styles of elements

const mainHeading = document.querySelector('div.headline h2');
console.log(mainHeading);
console.log(mainHeading.style);
// mainHeading.style.color = 'Blue';
// mainHeading.style.backgroundColor = 'white';
// mainHeading.style.border = '20px solid black';

// get and set attributes

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
// link.setAttribute('href', 'http://google.com');

const inputElement = document.querySelector('.form-todo input');
console.log(inputElement.getAttribute('type'));

// get multiple elements by class name

const allNav = document.getElementsByClassName("nav-item");
console.log(allNav);
console.log(allNav[0]);
console.log(allNav[1]);
console.log(allNav[2]);

// get multiple elements by querySelectorAll

const allNav2 = document.querySelectorAll('.nav-item');
console.log(allNav2);

// iterate elements

const atag = document.getElementsByTagName("a");
console.log(atag);

for(let tag of atag) {
    console.log(tag);
    // tag.style.backgroundColor = 'white';
    // tag.style.color = 'black';
}

// innerHtml

const head_line = document.querySelector(".headline");
console.log(head_line.innerHTML);
// head_line.innerHTML = "<h1>Inner HTML changed</h1>"
// head_line.innerHTML += "<button class = \"btn\">Learn More<button>"
console.log(head_line.innerHTML);

// class lists

const section_todo = document.querySelector('.todo');
console.log(section_todo.classList);

// section_todo.classList.add('bg-dark');

const header2 = document.querySelector('.header');
console.log(header2.classList);
header.classList.toggle('bg-dark');
header.classList.toggle('bg-dark');

// add html element using javascript

// const todo_list = document.querySelector('.todo-list');
// todo_list.innerHTML = todo_list.innerHTML + "<li>To Do New</li>" 

// document.createElement()

const newTodo = document.createElement('li');
// const newTodoText = document.createTextNode("Hello World");
newTodo.textContent = "Hello World";
// newTodo.append(newTodoText);
console.log(newTodo);

const todoList = document.querySelector(".todo-list");
// todoList.append(newTodo);

const todo1 = document.querySelector(".todo-list");
console.log(todo1);
// todo1.remove(todo1);

// clone node

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new node";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);


// dimension of elements

const section_todo2 = document.querySelector(".todo");
console.log(section_todo2.getBoundingClientRect());

// ################################## Events ##################################

// mouse event

const btn = document.querySelector(".btn-headline");
// console.log(btn);
// btn.onclick = () => {
//     console.log("You clicked me");
// }
btn.addEventListener("click", () => {
    console.log("Clicked");
    console.log(this);
});
btn.addEventListener("dblclick", function(){
    console.log("Double Clicked");
    console.log(this);
});


// keypress button
const body = document.body;
body.addEventListener("keypress", (e) => {
    console.log(e);
});

btn.addEventListener("mouseover" ,() => {
    btn.style.backgroundColor = "#aaa";
    btn.style.color = "#fff";
})
btn.addEventListener("mouseleave" ,() => {
    btn.style.backgroundColor = "rgb(233,233,233)";
    btn.style.color = "black";
})


const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type = 'text']");
const todo_List = document.querySelector('.todo-list');



// console.log(todoForm);
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("Form Submit");
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
        <button class = "todo-button done">Done</button>
        <button class = "todo-button remove">Remove</button>
    </div>`
    newLi.innerHTML = newLiInnerHtml;
    // console.log(newLi);
    todo_List.append(newLi);
    todoInput.value = "";
});

todo_List.addEventListener("click", (e) => {
    // console.log(e.target);
    // check if user click on dine button
    if(e.target.classList.contains("remove")) {
        // console.log("Remove?");
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")) {
        // console.log("Done");
        const LiSpan = e.target.parentNode.previousElementSibling;
        // console.log(LiSpan);
        LiSpan.style.textDecoration = "line-through";
    }
})