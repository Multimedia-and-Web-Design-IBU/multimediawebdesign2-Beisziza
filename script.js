// ===== Week 1: Arrays =====

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
console.log(scores);
const removed = scores.pop();
console.log(removed);
console.log(scores);
scores.unshift(70);
console.log(scores);
scores.shift();
console.log(scores);

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
const sum = allScores.reduce((acc, curr) => acc + curr, 0);
const avg = sum / allScores.length;
console.log('Class average:', avg.toFixed(2));

// ===== Week 2: Objects =====

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
library[0].summary = function() {
  return `<span class="math-placeholder" data-math-id="MATHINLINE2"></span>{this.author}, published in ${this.year}.`;
};
console.log(library[0].summary());

// ===== Week 3: DOM Manipulation =====

const titleEl = document.getElementById("title");
console.log(titleEl);
console.log(titleEl.textContent);

const btn = document.getElementById("btn");
const firstLi = document.querySelector("li");
const allParagraphs = document.querySelectorAll("p");

// Change content & styles
titleEl.textContent = "Welcome to JavaScript!";
titleEl.style.color = "blue";
titleEl.style.fontSize = "2rem";
titleEl.classList.add("highlight");
titleEl.classList.remove("highlight");
titleEl.classList.toggle("active");

// Create and insert new elements (fruit list)
const fruitList = ["Apple", "Banana", "Cherry"];
const listEl = document.getElementById("list");
fruitList.forEach(fruit => {
  const item = document.createElement("li");
  item.textContent = fruit;
  listEl.appendChild(item);
});
const output = document.getElementById("output");
output.innerHTML = "<strong>List built!</strong> 3 items added.";

// Solo Exercise 3.4 — Dynamic product list
const productsList = [
  { name: "Laptop", price: 999 },
  { name: "Mouse",  price: 29  },
  { name: "Keyboard", price: 79 }
];
listEl.innerHTML = "";
productsList.forEach(product => {
  const item = document.createElement("li");
  item.textContent = `<span class="math-placeholder" data-math-id="MATHINLINE3"></span>${product.price}`;
  if(product.price > 500) item.style.color = "red";
  listEl.appendChild(item);
});
titleEl.textContent = "Product Catalogue";

// ===== Week 4: Events =====
let clickCount = 0;
btn.addEventListener("click", () => {
  clickCount++;
  output.textContent = `Button clicked ${clickCount} time(s).`;
  btn.style.backgroundColor = "green";
  btn.textContent = "Clicked!";
});

const searchInput = document.getElementById("search");
if(searchInput) {
  searchInput.addEventListener("input", e => {
    output.textContent = `You typed: "<span class="math-placeholder" data-math-id="MATHINLINE4"></span>{e.target.value.length} chars)`;
  });
  searchInput.addEventListener("keydown", e => {
    if(e.key === "Enter") {
      output.textContent = `Searched for: "${searchInput.value}"`;
      searchInput.value = "";
    }
  });
}

// Event delegation on list
listEl.addEventListener("click", e => {
  if(e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "grey";
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

taskInput.addEventListener("keydown", e => {
  if(e.key === "Enter") addBtn.click();
});

tasksUL.addEventListener("click", e => {
  if(e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "grey";
  }
});

// ===== Week 5: Fetch API =====
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(err => console.error("Fetch error:", err));

async function loadUser(id) {
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await resp.json();
    console.log(user.name, user.email, user.address.city);
  } catch(err) {
    console.error("Failed to load user:", err);
  }
}
loadUser(1);

async function loadPosts() {
  listEl.innerHTML = "<li>Loading...</li>";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await resp.json();
    listEl.innerHTML = "";
    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      listEl.appendChild(li);
    });
    titleEl.textContent = `Loaded ${posts.length} posts`;
  } catch(err) {
    listEl.innerHTML = "<li>Error loading posts.</li>";
  }
}
loadPosts();

async function showUsers() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await resp.json();
    listEl.innerHTML = "";
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `<span class="math-placeholder" data-math-id="MATHINLINE5"></span>{user.email}`;
      listEl.appendChild(li);
    });
    titleEl.textContent = `${users.length} Users Loaded`;
  } catch(err) {
    listEl.innerHTML = "<li>Error loading users.</li>";
  }
}
btn.addEventListener("click", showUsers);

// ===== Week 6 and beyond: various style & animation likely handled in CSS =====

// ===== Week 7.5 Solo Exercise — Photo Gallery =====
async function loadPhotos(albumId) {
  listEl.innerHTML = "";
  output.innerHTML = "";
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    if (!resp.ok) throw new Error(`Fail to load photos: ${resp.status}`);
    const photos = await resp.json();
    photos.forEach(photo => {
      const li = document.createElement("li");
      li.textContent = photo.title;
      li.dataset.url = photo.thumbnailUrl;
      listEl.appendChild(li);
    });
    titleEl.textContent = `Album <span class="math-placeholder" data-math-id="MATHINLINE6"></span>{photos.length} Photos`;
  } catch(err) {
    listEl.innerHTML = `<li>Error: ${err.message}</li>`;
    titleEl.textContent = "Error loading photos";
  }
}

listEl.addEventListener("click", e => {
  if(e.target.tagName === "LI" && e.target.dataset.url) {
    output.innerHTML = "";
    const img = document.createElement("img");
    img.src = e.target.dataset.url;
    img.alt = e.target.textContent;
    output.appendChild(img);
  }
});

// ===== Week 8.5 Solo Exercise — Explore API (REST Countries) =====
async function exploreAPI() {
  try {
    const url = new URL("https://restcountries.com/v3.1/region/europe");
    url.searchParams.set("fields", "name,capital,population");
    console.log("Fetching URL:", url.toString());
    const resp = await fetch(url);
    console.log("Status:", resp.status);
    console.log("Content-Type:", resp.headers.get("content-type"));
    if(!resp.ok) throw new Error(`API request failed: ${resp.status}`);
    const countries = await resp.json();
    console.log(`Total countries returned: ${countries.length}`);
    const filtered = countries.filter(c => c.population > 5000000);
    const names = filtered.map(c => c.name.common).sort();
    listEl.innerHTML = "";
    names.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      listEl.appendChild(li);
    });
  } catch(err) {
    listEl.innerHTML = `<li>Error: ${err.message}</li>`;
  }
}
// Optionally call exploreAPI on page load or via button.


// ===== Week 9: Solo Exercise loadComments =====
async function loadComments(postId) {
  try {
    updateTitle(`Loading comments for post ${postId}...`);
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    if(!response.ok) throw new Error(`Failed to load comments: ${response.status}`);
    const comments = await response.json();
    clearList();
    comments.forEach(comment => {
      const li = document.createElement("li");
      li.textContent = `<span class="math-placeholder" data-math-id="MATHINLINE7"></span>{comment.email}`;
      listEl.appendChild(li);
    });
    updateTitle(`${comments.length} comments loaded`);
  } catch (error) {
    clearList();
    const li = document.createElement("li");
    li.textContent = `Error: ${error.message}`;
    listEl.appendChild(li);
    updateTitle("Error loading comments");
  }
}
function clearList() {
  if(listEl) listEl.innerHTML = "";
}
function updateTitle(text) {
  if(titleEl) titleEl.textContent = text;
}
// Call loadComments(1) on page load
loadComments(1);

// Bonus buttons for posts 1, 2, 3
const btnContainer = document.createElement("div");
[1,2,3].forEach(id => {
  const button = document.createElement("button");
  button.textContent = `Post ${id}`;
  button.addEventListener("click", () => loadComments(id));
  btnContainer.appendChild(button);
});
document.body.insertBefore(btnContainer, listEl);

// ===== Week 9.5 Solo Exercise Vanilla to React explanation - as comments =====
/*
1. State: 'items' array stores the state.
2. Re-render: 'renderList()' rebuilds DOM to reflect state.
3. Component: 'renderList()' acts like component rendering UI.
4. Props: 'text' passed to addItem() is analogous to props.

Bonus React component (requires React setup):
import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    setItems(prev => [...prev, text]);
  }

  return (
    <>
      <button onClick={() => addItem("New Item")}>Add Item</button>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </>
  );
}
*/
