document.getElementById('userIcon').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('userLoginSection').style.display = 'block';
    document.getElementById('adminLoginSection').style.display = 'none';
});

document.getElementById('adminIcon').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('adminLoginSection').style.display = 'block';
    document.getElementById('userLoginSection').style.display = 'none';
});

document.getElementById('userLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;

    // Example validation
    if (validateEmail(email)) {
        window.location.href = 'user_home.html';
    } else {
        alert('Invalid email or password for user login.');
    }
});

document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;

    // Example validation
    if (validateEmail(email)) {
        window.location.href = 'admin_home.html';
    } else {
        alert('Invalid email or password for admin login.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
// script.js

// Function to highlight clicked icon
function highlightIcon(id) {
    // Remove highlight from all icons
    var icons = document.querySelectorAll('nav ul li a i');
    icons.forEach(function(icon) {
        icon.classList.remove('nav-highlight');
    });

    // Highlight clicked icon
    document.getElementById(id).querySelector('i').classList.add('nav-highlight');
}
