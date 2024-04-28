// Fake user data (in real app this would be fetched from server)
let users = [
    { username: "user1", password: "pass1", email: "user1@example.com", age: "30", dob: "1994-04-21", contact: "1234567890" },
    { username: "user2", password: "pass2", email: "user2@example.com", age: "25", dob: "1999-01-15", contact: "9876543210" }
];

document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    const profileForm = document.getElementById("profileForm");
    const logoutLink = document.getElementById("logout");

    // Signup
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        // In real app, you would send this data to server for registration
        console.log("Signup:", { username, password, email });
    });

    // Login
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        // In real app, you would send this data to server for authentication
        let user = users.find(user => user.username === username && user.password === password);
        if (user) {
            // Redirect to profile page
            window.location.href = "profile.html";
        } else {
            alert("Invalid username or password");
        }
    });

    // Profile Update
    profileForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let age = document.getElementById("age").value;
        let dob = document.getElementById("dob").value;
        let contact = document.getElementById("contact").value;
        // In real app, you would send this data to server for profile update
        console.log("Profile Update:", { age, dob, contact });
    });

    // Logout
    logoutLink.addEventListener("click", function(event) {
        event.preventDefault();
        // In real app, you would destroy user session on the server
        window.location.href = "login.html";
    });

    // Set username on profile page
    let usernameSpan = document.getElementById("username");
    let url = window.location.pathname;
    let filename = url.substring(url.lastIndexOf('/')+1);
    if (filename === "profile.html") {
        let username = localStorage.getItem("username");
        usernameSpan.textContent = username;
    }
});
