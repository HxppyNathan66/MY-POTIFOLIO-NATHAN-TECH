// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// PORTFOLIO FILTER
function filterPortfolio(category) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (
            category === "all" ||
            card.classList.contains(category)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".card img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});


// NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.8)";
        navbar.style.boxShadow =
            "0 0 20px rgba(255,0,0,0.3)";
    } else {
        navbar.style.background =
            "rgba(0,0,0,0.35)";
        navbar.style.boxShadow = "none";
    }
});