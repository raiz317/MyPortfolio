document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "black";
        } else {
            navbar.style.backgroundColor = "black";
        }
    });

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.querySelector("#input-name input").value.trim();
        let subject = document.querySelector("#input-subject input").value.trim();
        let email = document.querySelector("#input-email input").value.trim();
        let phone = document.querySelector("#input-phone input").value.trim();
        let message = document.querySelector("#input-message input").value.trim();

        if (!name || !subject || !email || !phone || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        alert("Form submitted successfully!");
        this.reset();
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
