// Theme Toggle Functionality
const themeToggle = document.getElementById('toggle-theme');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'dark';

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'var(--card-bg)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'transparent';
    }
});
// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function () {
    // Animate progress bars when section comes into view
    const aboutSection = document.querySelector('.about-section');
    const skillItems = document.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillItems.forEach(item => {
                    const fill = item.querySelector('.progress-fill');
                    const width = fill.style.width;
                    fill.style.width = '0';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);

    // Timeline item animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease ' + (index * 0.2) + 's';
    });

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineItems.forEach(item => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                });
            }
        });
    }, { threshold: 0.1 });

    timelineObserver.observe(document.querySelector('.timeline'));
});
// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});
// Highlight active section in navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
// Contact form submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            // Reset form
            contactForm.reset();

            // Show success message
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}
// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const overlay = card.querySelector('.project-overlay');
    const img = card.querySelector('img');

    card.addEventListener('mouseenter', () => {
        overlay.style.opacity = '1';
        img.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
        img.style.transform = 'scale(1)';
    });
});
// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Typewriter effect enhancement
const typewriterText = document.querySelector('.typewriter-text');
if (typewriterText) {
    const text = typewriterText.textContent;
    typewriterText.textContent = '';

    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            // Keep cursor blinking after typing completes
            typewriterText.style.borderRight = '4px solid var(--accent)';
        }
    }, 100);
}

// Add this to your script.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize stars
    const starsContainer = document.querySelector('.stars');
    if (starsContainer) {
        // Clear existing stars
        starsContainer.innerHTML = '';

        // Create new stars
        for (let i = 0; i < 30; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            // Random size
            const size = Math.random() * 10 + 5;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Random animation delay
            star.style.animationDelay = `${Math.random() * 3}s`;

            starsContainer.appendChild(star);
        }
    }

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const effect = card.querySelector('.hover-effect');
            effect.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            const effect = card.querySelector('.hover-effect');
            effect.style.opacity = '0';
        });
    });
});
// Contact Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Create dynamic stars for contact section
    const starsContainer = document.querySelector('.contact-stars');
    if (starsContainer) {
        // Clear any existing stars
        starsContainer.innerHTML = '';
        
        // Create 50 stars
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random size
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Random opacity and animation
            star.style.opacity = Math.random() * 0.5 + 0.1;
            star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite alternate`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            
            starsContainer.appendChild(star);
        }
    }
    
    // Magic button sparkle effect
    const magicBtn = document.querySelector('.magic-btn');
    if (magicBtn) {
        const sparkles = magicBtn.querySelectorAll('.sparkle');
        
        magicBtn.addEventListener('mouseenter', () => {
            sparkles.forEach(sparkle => {
                // Random position
                sparkle.style.left = `${Math.random() * 100}%`;
                sparkle.style.top = `${Math.random() * 100}%`;
                
                // Random size
                const size = Math.random() * 10 + 5;
                sparkle.style.width = `${size}px`;
                sparkle.style.height = `${size}px`;
                
                // Animate
                sparkle.style.opacity = '1';
                sparkle.style.transform = 'translate(0, 0)';
                sparkle.style.transition = 'all 0.3s ease-out';
                
                setTimeout(() => {
                    sparkle.style.opacity = '0';
                    sparkle.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
                }, 300);
            });
        });
    }
    
    // Update current year in footer
    const currentYear = document.querySelector('.current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success state
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});