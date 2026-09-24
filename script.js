/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


/* Close mobile menu after clicking a link */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const formSuccess = document.getElementById("formSuccess");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    /* Clear previous messages */

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    let isValid = true;


    /* Name validation */

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Please enter your name.";
        isValid = false;

    } else if (name.length < 2) {

        nameError.textContent = "Name must contain at least 2 characters.";
        isValid = false;

    }


    /* Email validation */

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Please enter your email.";
        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Please enter a valid email address.";
        isValid = false;

    }


    /* Subject validation */

    const subject = subjectInput.value.trim();

    if (subject === "") {

        subjectError.textContent = "Please enter a subject.";
        isValid = false;

    } else if (subject.length < 3) {

        subjectError.textContent =
            "Subject must contain at least 3 characters.";

        isValid = false;

    }


    /* Message validation */

    const message = messageInput.value.trim();

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;

    }


    /* If form is valid */

    if (isValid) {

        formSuccess.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();

    }

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


/* =========================================
   ACTIVE NAVIGATION ON SCROLL
========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active-link");
        }

    });

});