// Scroll gestion
document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.querySelector('.scrolltext-1');
    const section2 = document.querySelector('.scrolltext-2');
    const section3 = document.querySelector('.scrolltext-3');
    const project = document.querySelector('.project-1'); 
    const aboutMe = document.querySelector('#about-me');
    const contact = document.querySelector('#contact'); 

    if (section1 && section2 && section3 && project && aboutMe && contact) {
        console.log('Elements found:', section1, section2, section3, project, aboutMe, contact);

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY; 

            if (scrollY > 10) { 
                project.classList.add('scroll-project');
            } else {
                project.classList.remove('scroll-project');
            }

            if (scrollY > 550) { 
                aboutMe.classList.add('scroll-about');
            } else {
                aboutMe.classList.remove('scroll-about');
            }

            if (scrollY > 700) {  
                contact.classList.add('scroll-contact');
            } else {
                contact.classList.remove('scroll-contact');
            }
        });
    } else {
        console.error('One or more elements were not found.');
    }
});


 // Formular gestion
 document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");
    const formContainer = document.querySelector(".form-container");

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    setTimeout(() => {
        formContainer.classList.add("visible");
    }, 300);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        if (!validateEmail(email)) {
            status.innerText = "Invalid email format.";
            status.style.color = "red";
            return;
        }

        const formData = new FormData(form);

        try {
            const response = await fetch("send_mail.php", {
                method: "POST",
                body: formData
            });

            const result = await response.text();

            status.innerText = result;
            status.style.color = result.includes("Error") || result.includes("Invalid") ? "red" : "green";

            if (!result.includes("Error")) {
                form.reset();
            }
        } catch (error) {
            status.innerText = "Error sending.";
            status.style.color = "red";
        }
    });
});

//Burger menu
document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".links");

    burgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

