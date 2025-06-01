# Simple To-Do List Project

## Project Overview

In this project, you'll build a simple to-do list application using HTML, CSS, and JavaScript. This project will help you practice DOM manipulation, event handling, and local storage.

## Learning Objectives
- Create interactive web elements with JavaScript
- Manipulate the DOM to add, edit, and remove elements
- Use event listeners to handle user interactions
- Store and retrieve data using localStorage
- Apply CSS styling to create an attractive user interface

## Project Requirements

Your to-do list application should have the following features:

1. A form to add new tasks
2. A list to display all tasks
3. The ability to mark tasks as complete
4. The ability to delete tasks
5. Persistence using localStorage (tasks should remain after page refresh)
6. Responsive design that works on mobile and desktop

## Step-by-Step Guide

### Step 1: Set up the HTML structure

Create an `index.html` file with the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>My To-Do List</h1>
    
    <form id="task-form">
      <input type="text" id="task-input" placeholder="Add a new task..." required>
      <button type="submit">Add Task</button>
    </form>
    
    <ul id="task-list">
      <!-- Tasks will be added here dynamically -->
    </ul>
  </div>
  
  <script src="script.js"></script>
</body>
</html>
```

### Step 2: Style the application with CSS

Create a `styles.css` file:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
}

#task-form {
  display: flex;
  margin-bottom: 20px;
}

#task-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

button {
  padding: 10px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

#task-list {
  list-style-type: none;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.task-item:hover {
  background-color: #f1f1f1;
}

.task-item.completed {
  text-decoration: line-through;
  opacity: 0.7;
}

.task-actions {
  display: flex;
}

.complete-btn, .delete-btn {
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.complete-btn {
  background-color: #2ecc71;
}

.complete-btn:hover {
  background-color: #27ae60;
}

.delete-btn {
  background-color: #e74c3c;
}

.delete-btn:hover {
  background-color: #c0392b;
}

@media (max-width: 600px) {
  .container {
    margin: 10px;
    padding: 15px;
  }
  
  #task-form {
    flex-direction: column;
  }
  
  #task-input {
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  button {
    border-radius: 4px;
  }
}
```

### Step 3: Implement the JavaScript functionality

Create a `script.js` file:

```javascript
// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task event
taskForm.addEventListener('submit', addTask);

// Functions
function addTask(e) {
  e.preventDefault();
  
  if (taskInput.value.trim() === '') {
    alert('Please add a task');
    return;
  }
  
  // Create task item
  const taskItem = createTaskElement(taskInput.value);
  
  // Add task to DOM
  taskList.appendChild(taskItem);
  
  // Add task to localStorage
  saveTaskToLocalStorage(taskInput.value);
  
  // Clear input
  taskInput.value = '';
}

function createTaskElement(taskText) {
  // Create list item
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  
  // Create text span
  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;
  
  // Create action buttons container
  const taskActions = document.createElement('div');
  taskActions.className = 'task-actions';
  
  // Create complete button
  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete-btn';
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
    updateTaskInLocalStorage();
  });
  
  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
    removeTaskFromLocalStorage(taskTextSpan.textContent);
  });
  
  // Append elements
  taskActions.appendChild(completeBtn);
  taskActions.appendChild(deleteBtn);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(taskActions);
  
  return taskItem;
}

function saveTaskToLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push({
    text: task,
    completed: false
  });
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.forEach(task => {
    const taskItem = createTaskElement(task.text);
    if (task.completed) {
      taskItem.classList.add('completed');
    }
    taskList.appendChild(taskItem);
  });
}

function removeTaskFromLocalStorage(taskText) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks = tasks.filter(task => task.text !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInLocalStorage() {
  const taskItems = document.querySelectorAll('.task-item');
  const tasks = [];
  
  taskItems.forEach(item => {
    const taskText = item.querySelector('span').textContent;
    const isCompleted = item.classList.contains('completed');
    
    tasks.push({
      text: taskText,
      completed: isCompleted
    });
  });
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

### Step 4: Test your application

1. Open your `index.html` file in a web browser
2. Add some tasks
3. Mark tasks as complete
4. Delete tasks
5. Refresh the page to verify that your tasks persist

## Enhancements and Extensions

Once you've completed the basic to-do list, try adding these enhancements:

1. **Task Categories**: Add the ability to categorize tasks (work, personal, etc.)
2. **Due Dates**: Allow users to set due dates for tasks
3. **Priority Levels**: Implement priority levels (high, medium, low)
4. **Filtering**: Add options to filter tasks by status, category, or priority
5. **Sorting**: Allow users to sort tasks by different criteria
6. **Edit Functionality**: Enable users to edit existing tasks
7. **Drag and Drop**: Implement drag and drop to reorder tasks
8. **Dark Mode**: Add a toggle for dark/light mode

## Troubleshooting Common Issues

1. **Tasks not saving**: Make sure localStorage is working correctly. Check browser console for errors.
2. **Event listeners not working**: Verify that your DOM elements are correctly selected and that event listeners are properly attached.
3. **CSS not applying**: Check for typos in class names or CSS selectors.
4. **Responsive design issues**: Test on different screen sizes and adjust your CSS as needed.

## Conclusion

Congratulations! You've built a functional to-do list application using HTML, CSS, and JavaScript. This project demonstrates your ability to:

- Create and manipulate DOM elements
- Handle user events
- Store data locally in the browser
- Create a responsive and attractive user interface

As you continue learning, you can expand this project or use these skills to build more complex web applications.
