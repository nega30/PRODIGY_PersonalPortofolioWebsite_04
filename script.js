// Example of form submission (you can add an actual backend to handle form submission)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    document.getElementById("contact-form").reset(); // Reset form after submission
  });
  