let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-100px'; 
        navbar.style.transition = 'top 0.3s ease';
    } else {
        // Scrolling up
        navbar.style.top = '0';
    }
    
    lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });
});
