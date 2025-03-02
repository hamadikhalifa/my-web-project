document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const messageBox = document.createElement("p"); // Create a message box

    messageBox.style.textAlign = "center";  
    messageBox.style.marginTop = "10px";  
    form.appendChild(messageBox); // Add message box below form

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form action

        // Validation: Check if fields are empty
        if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
            showMessage("❌ Please fill in all fields before submitting.", "error");
            return;
        }

        // Simulate form submission (Replace with backend integration later)
        showMessage("✅ Thank you, " + nameInput.value + "! Your message has been sent.", "success");

        // Clear the form fields
        form.reset();
    });

    function showMessage(text, type) {
        messageBox.textContent = text;
        if (type === "success") {
            messageBox.style.color = "#4CAF50"; // Green for success
        } else {
            messageBox.style.color = "#FF3B3B"; // Red for error
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant jump
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed header
                    behavior: "smooth" // Smooth scroll effect
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");

    // Hide preloader after 2 seconds
    setTimeout(() => {
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 2000);
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let page = this.getAttribute("href");
        document.getElementById("content").innerHTML = <h1>Loading ${page}...</h1>;
        // Load actual content via AJAX or fetch API
    });
});
