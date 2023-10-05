// JavaScript for handling form submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // You can replace this with your actual contact form handling logic
        console.log("Form Data:", data);
        alert("Thank you for contacting us! We will get back to you soon.");
        contactForm.reset();
    });
});
