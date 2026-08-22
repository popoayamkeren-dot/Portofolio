// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("show")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}

// =========================
// STAR
// =========================
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// Membuat bintang
function createStars() {
    stars = [];

    for (let i = 0; i < 120; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            opacity: Math.random()
        });
    }
}

createStars();


// Animasi bintang
function animateStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

        star.x += star.speedX;
        star.y += star.speedY;

        // Kalau keluar layar, muncul lagi dari sisi lain
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;

        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;

        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}

animateStars();
// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        if (menuBtn) {

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


function toggleMenu() {

    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");

    menu.classList.toggle("active");

    hamburger.classList.toggle("active");
}


// =========================
// CURRENT YEAR
// =========================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const email =
                document.getElementById("email").value;

            const message =
                document.getElementById("message").value;


            const phone =
                "628XXXXXXXXXX";


            const text =
                `Halo Enos,%0A%0A` +
                `Nama: ${name}%0A` +
                `Email: ${email}%0A%0A` +
                `Pesan:%0A${message}`;


            window.open(
                `https://wa.me/${phone}?text=${text}`,
                "_blank"
            );

        }
    );

}
