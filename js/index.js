document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const triggerHeight = window.innerHeight / 1.2;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerHeight) {
            section.classList.add("active");
        }
    });
    
    document.addEventListener("scroll", function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerHeight) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });
});
