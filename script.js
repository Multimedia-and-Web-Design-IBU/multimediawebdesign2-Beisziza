// ===== Block 1: Arrays =====

// Exercise 1.1
const fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[0]); // apple
console.log(fruits[2]); // cherry
console.log(fruits.length); // 4
fruits[1] = "blueberry";
console.log(fruits);
console.log(fruits[fruits.length - 1]); // date

// Exercise 1.2
const scores = [85, 92, 78];
scores.push(95);
console.log(scores); // [85, 92, 78, 95]
const removed = scores.pop();
console.log(removed); // 95
console.log(scores); // [85, 92, 78]
scores.unshift(70);
console.log(scores); // [70, 85, 92, 78]
scores.shift();
console.log(scores); // [85, 92, 78]

// Exercise 1.3
const numbers = [1,2,3,4,5,6,7,8];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);
const firstBig = numbers.find(n => n > 5);
console.log(firstBig);
const result = numbers.filter(n => n % 2 === 0).map(n => n * 2);
console.log(result);

// Solo Exercise 1.4 — Student grade analyser
const allScores = [42, 78, 55, 91, 63, 88, 34, 70, 95, 60];
console.log('Total number of scores:', allScores.length);

const passing = allScores.filter(score => score >= 70);
console.log('Passing scores:', passing);

const failing = allScores.filter(score => score < 70);
console.log('Failing scores:', failing);

const scaled = allScores.map(score => Math.round(score * 1.05));
console.log('Scaled scores:', scaled);

const firstAbove90 = allScores.find(score => score > 90);
console.log('First score above 90:', firstAbove90);

// BONUS: calculate average
const sum = allScores.reduce((acc, curr) => acc + curr, 0);
const avg = sum / allScores.length;
console.log('Class average:', avg.toFixed(2));

// ===== Block 2: Objects =====

// Exercise 2.1
const student = {
  name: "Alex",
  age: 20,
  city: "Skopje",
  isEnrolled: true
};
console.log(student.name);
console.log(student.age);
const key = "city";
console.log(student[key]);
student.grade = "A";
student.age = 21;
console.log(student);

// Exercise 2.2
const rectangle = {
  width: 10,
  height: 5,
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2*(this.width + this.height);
  },
  describe() {
    return `Rectangle: <span class="math-placeholder" data-math-id="MATHINLINE0"></span>{this.height}, area = ${this.area()}`;
  }
};
console.log(rectangle.area());
console.log(rectangle.perimeter());
console.log(rectangle.describe());

// Exercise 2.3
const products = [
  { id: 1, name: "Laptop",  price: 999,  inStock: true },
  { id: 2, name: "Mouse",   price: 29,   inStock: true },
  { id: 3, name: "Monitor", price: 349,  inStock: false },
  { id: 4, name: "Keyboard",price: 79,   inStock: true }
];
const available = products.filter(p => p.inStock);
console.log('Available products:', available.length);
const names = products.map(p => p.name);
console.log('Product names:', names);
const laptop = products.find(p => p.id === 1);
console.log('Product with id 1:', laptop.name);

// Solo Exercise 2.4 — Library catalogue
const library = [
  {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, available: true},
  {title: "1984", author: "George Orwell", year: 1949, available: false},
  {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, available: true},
  {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, available: true}
];
console.log('First book title:', library[0].title);
const availableBooks = library.filter(book => book.available);
console.log('Available books:', availableBooks);
const formattedBooks = library.map(book => `<span class="math-placeholder" data-math-id="MATHINLINE1"></span>{book.author} (${book.year})`);
console.log('Formatted book list:', formattedBooks);
library.push({title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, available: true});
console.log('Added new book:', library);
const foundBook = library.find(book => book.title === "1984");
console.log('Found book:', foundBook);

// Add summary method to a book
library[0].summary = function() {
  return `<span class="math-placeholder" data-math-id="MATHINLINE2"></span>{this.author}, published in ${this.year}.`;
};
console.log(library[0].summary());

// ===== Block 3: DOM Manipulation =====

// Selecting elements
const title = document.getElementById("title");
console.log(title);
console.log(title.textContent);

const btn = document.querySelector("#btn");
const firstLi = document.querySelector("li");
const allParagraphs = document.querySelectorAll("p");

// Changing content and styles
title.textContent = "Welcome to JavaScript!";
title.style.color = "blue";
title.style.fontSize = "2rem";
title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("active");
const link = document.querySelector("a");
if (link) link.setAttribute("href", "https://example.com");

// Creating and inserting new elements
const fruitList = ["Apple", "Banana", "Cherry"];
const list = document.getElementById("list");
fruitList.forEach(fruit => {
  const item = document.createElement("li");
  item.textContent = fruit;
  list.appendChild(item);
});
const output = document.getElementById("output");
output.innerHTML = "<strong>List built!</strong> 3 items added.";

// Solo Exercise 3.4 — Dynamic product list
const productsList = [
  { name: "Laptop", price: 999 },
  { name: "Mouse",  price: 29  },
  { name: "Keyboard", price: 79 }
];
const prodListElement = document.getElementById("list");
prodListElement.innerHTML = "";
productsList.forEach(product => {
  const item = document.createElement("li");
  item.textContent = `<span class="math-placeholder" data-math-id="MATHINLINE3"></span>${product.price}`;
  if(product.price > 500) {
    item.style.color = "red";
  }
  prodListElement.appendChild(item);
});
document.getElementById("title").textContent = "Product Catalogue";

// ===== Block 4: Events =====
const button = document.getElementById("btn");
const outputEl = document.getElementById("output");
let clickCount = 0;
button.addEventListener("click", () => {
  clickCount++;
  outputEl.textContent = `Button clicked ${clickCount} time(s).`;
  button.style.backgroundColor = "green";
  button.textContent = "Clicked!";
});

// Keyboard events
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    const typed = event.target.value;
    outputEl.textContent = `You typed: "<span class="math-placeholder" data-math-id="MATHINLINE4"></span>{typed.length} chars)`;
  });
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      outputEl.textContent = `Searched for: "${searchInput.value}"`;
      searchInput.value = "";
    }
  });
}

// Event delegation
const listEl = document.getElementById("list");
listEl.addEventListener("click", (event) => {
  if(event.target.tagName === "LI") {
    event.target.style.textDecoration = "line-through";
    event.target.style.color = "grey";
  }
});

// Solo Exercise 4.4 — To-do list interactive
const taskInput = document.createElement("input");
taskInput.id = "taskInput";
taskInput.type = "text";
taskInput.placeholder = "New task...";
document.body.appendChild(taskInput);

const addBtn = document.createElement("button");
addBtn.id = "addBtn";
addBtn.textContent = "Add Task";
document.body.appendChild(addBtn);

const tasksUL = document.createElement("ul");
tasksUL.id = "tasks";
document.body.appendChild(tasksUL);

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    tasksUL.appendChild(li);
    taskInput.value = "";
  }
});

taskInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    addBtn.click();
  }
});

tasksUL.addEventListener("click", (e) => {
  if(e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "grey";
  }
});

// ===== Block 5: Fetch API =====

// Exercise 5.1
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Something went wrong:", error);
  });

// Exercise 5.2
async function loadUser(id){
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await resp.json();
    console.log(user.name);
    console.log(user.email);
    console.log(user.address.city);
  } catch(err) {
    console.error("Failed to load user:", err);
  }
}
loadUser(1);

// Exercise 5.3
async function loadPosts(){
  const list = document.getElementById("list");
  list.innerHTML = "<li>Loading...</li>";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await resp.json();
    list.innerHTML = "";
    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      list.appendChild(li);
    });
    document.getElementById("title").textContent = `Loaded ${posts.length} posts`;
  } catch(err) {
    list.innerHTML = "<li>Error loading posts.</li>";
  }
}
loadPosts();

// Solo Exercise 5.4 — User card generator
async function showUsers(){
  const list = document.getElementById("list");
  const titleEl = document.getElementById("title");
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await resp.json();
    list.innerHTML = "";
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `<span class="math-placeholder" data-math-id="MATHINLINE5"></span>{user.email}`;
      list.appendChild(li);
    });
    titleEl.textContent = `${users.length} Users Loaded`;
  } catch(err) {
    list.innerHTML = "<li>Error loading users.</li>";
  }
}
const loadBtn = document.getElementById("btn");
if(loadBtn) loadBtn.addEventListener("click", showUsers);
