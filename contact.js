// JavaScript to add 'shrink' class to header on scroll
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
