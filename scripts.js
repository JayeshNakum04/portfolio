// Navigation menu toggle for mobile
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Typing animation for homepage
const typeEffect = () => {
    const text = document.querySelector('.typing');
    const roles = ['Web Developer', 'Designer', 'Freelancer', 'Photographer']; // Change these to match your skills
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            text.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 80;
        } else {
            text.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// Scroll animation for sections
const scrollAnimation = () => {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === current) {
                a.classList.add('active');
            }
        });
    });
}

// Active link highlight
const highlightNav = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu when link is clicked
            document.querySelector('.nav-links').classList.remove('nav-active');
            document.querySelector('.burger').classList.remove('toggle');
        });
    });
}

// Form submission
const formSubmit = () => {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const subject = form.querySelector('input[placeholder="Subject"]').value;
            const message = form.querySelector('textarea').value;
            
            // This is where you would normally send the form data to a server
            console.log({ name, email, subject, message });
            
            // For now, just show an alert
            alert('Your message has been sent! (This is just a demo)');
            form.reset();
        });
    }
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    typeEffect();
    scrollAnimation();
    highlightNav();
    formSubmit();
});
