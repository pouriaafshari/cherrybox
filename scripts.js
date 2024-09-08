// scripts.js
document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.remove('faded');
    } else {
        header.classList.add('faded');
    }
});
