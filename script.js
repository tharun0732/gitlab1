// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (!name) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message').value;
    const messageError = document.getElementById('messageError');
    if (!message) {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});

// To-Do List Functionality
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const task = todoInput.value.trim();

    if (task) {
        const todoItems = document.getElementById('todoItems');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="this.parentElement.remove()">Delete</button>
        `;
        todoItems.appendChild(li);
        todoInput.value = '';
    }
}

// Add todo on Enter key
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});