// Get the form element
const form = document.getElementById("contact-form");

// When the form is submitted, this function will be triggered
form.addEventListener("submit", function(event) {
    // Prevent form from submitting if there's an issue
    event.preventDefault();
    
    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Validate Name field
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    
    // Validate Email field
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    // Validate Message field
    if (message === "") {
        alert("Please enter your message.");
        return;
    }
    
    // If all fields are valid, submit the form
    alert("Your message has been sent!");
    form.submit(); 
});


