document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");
    const darkButton = document.getElementById("darkModeBtn");
    const toggleSkills = document.getElementById("toggleSkills");
    const skillsList = document.getElementById("skillsList");
    const slider = document.getElementById("sliderImage");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const greetingBox = document.getElementById("greeting");
    function showError(message) {
        formMessage.style.color = "red";
        formMessage.textContent = message;
    }
    function showSuccess(message) {
        formMessage.style.color = "green";
        formMessage.textContent = message;
    }
    function validateName() {
        if (nameInput.value.trim() === "") {
            nameInput.style.border = "2px solid red";
            return false;
        }
        nameInput.style.border = "2px solid green";
        return true;
    }
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.style.border = "2px solid red";
            return false;
        }
        emailInput.style.border = "2px solid green";
        return true;
    }
    function validateMessage() {
        if (messageInput.value.trim().length < 10) {
            messageInput.style.border = "2px solid red";
            return false;
        }
        messageInput.style.border = "2px solid green";
        return true;
    }
    function validateForm() {

        if (!validateName()) {
            showError("❌ Please enter your name.");
            return false;
        }
        if (!validateEmail()) {
            showError("❌ Please enter a valid email address.");
            return false;
        }
        if (!validateMessage()) {
            showError("❌ Message must be at least 10 characters.");
            return false;
        }
        showSuccess("✅ Form submitted successfully!");
        form.reset();
        nameInput.style.border = "";
        emailInput.style.border = "";
        messageInput.style.border = "";
        return true;
    }
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            validateForm();
        });
    }
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    darkButton.addEventListener("click", toggleDarkMode);
    darkButton.addEventListener("mouseover", function () {
        darkButton.style.transform = "scale(1.05)";
    });
    darkButton.addEventListener("mouseout", function () {
        darkButton.style.transform = "scale(1)";
    });
    function toggleSkillSection() {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
            toggleSkills.textContent = "Hide Skills";
        } else {
            skillsList.style.display = "none";
            toggleSkills.textContent = "Show Skills";
        }
    }
    toggleSkills.addEventListener("click", toggleSkillSection);
    const images = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg"
    ];
    let currentImage = 0;
    function updateSlider() {
        slider.src = images[currentImage];
    }
    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        updateSlider();
    }
    function previousImage() {
        currentImage = (currentImage - 1 + images.length) % images.length;
        updateSlider();
    }
    updateSlider();
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", previousImage);
    setInterval(nextImage, 3000);
    function updateGreeting() {
        const hour = new Date().getHours();
        let greeting = "";
        if (hour < 12) {
            greeting = "🌅 Good Morning!";
        }
        else if (hour < 18) {
            greeting = "☀️ Good Afternoon!";
        }
        else {
            greeting = "🌙 Good Evening!";
        }
        greetingBox.textContent = greeting;
    }
    updateGreeting();
});