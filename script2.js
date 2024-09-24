document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert message for now (you can replace this with any other logic, e.g., sending to a backend)
    alert(`Thank you for your message, ${name}! We'll get back to you at ${email}.`);

    // Reset the form
    document.getElementById('contactForm').reset();
});
