/* Custom Cursor and Interactive Effects */

// Cursor configuration
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let trailX = 0;
let trailY = 0;

// DOM elements
const exploreBtn = document.getElementById('exploreBtn');
const contactBtn = document.getElementById('contactBtn');
const nextSection = document.getElementById('nextSection');
const viewProjectsBtn = document.getElementById('viewProjectsBtn');

// Icons bar elements
const homeIcon = document.getElementById('homeIcon');
const educationIcon = document.getElementById('educationIcon');
const certificationIcon = document.getElementById('certificationIcon');
const workIcon = document.getElementById('workIcon');
const projectsIcon = document.getElementById('projectsIcon');
const contactIcon = document.getElementById('contactIcon');
const githubIcon = document.getElementById('githubIcon');
const linkedinIcon = document.getElementById('linkedinIcon');

// Custom cursor functions
function updateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    // Smooth trail movement
    trailX += (mouseX - trailX) * 0.05;
    trailY += (mouseY - trailY) * 0.05;
    
    // Update cursor positions
    if (customCursor) {
        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';
    }
    
    if (cursorTrail) {
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
    }
    
    requestAnimationFrame(updateCursor);
}

// Cursor hover effects
function handleCursorHover(element, scale = 1.2) {
    element.addEventListener('mouseenter', () => {
        if (customCursor) {
            customCursor.style.transform = `translate(-50%, -50%) scale(${scale})`;
            customCursor.style.background = 'var(--caribbean-current-light)';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        if (customCursor) {
            customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
            customCursor.style.background = 'var(--caribbean-current)';
        }
    });
}

// Smooth scroll function
function smoothScrollTo(targetElement) {
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Button ripple effect
function createRipple(event, button) {
    const ripple = document.createElement('div');
    ripple.className = 'btn-ripple';
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Page Navigation System
let currentPage = 'home';
let currentTheme = 'dark';

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Hide page selection
    const pageSelection = document.getElementById('pageSelection');
    if (pageSelection) {
        pageSelection.style.display = 'none';
    }
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
        currentPage = pageId;
        
        // Apply theme based on page
        if (pageId === 'visitorPage') {
            currentTheme = 'light';
            document.body.classList.add('visitor-theme');
            document.body.classList.remove('recruitor-theme');
        } else if (pageId === 'recruitorPage') {
            currentTheme = 'dark';
            document.body.classList.add('recruitor-theme');
            document.body.classList.remove('visitor-theme');
        } else {
            currentTheme = 'dark';
            document.body.classList.remove('visitor-theme', 'recruitor-theme');
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showPageSelection() {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Show page selection
    const pageSelection = document.getElementById('pageSelection');
    if (pageSelection) {
        pageSelection.style.display = 'block';
        currentPage = 'selection';
    }
    
    // Reset theme
    currentTheme = 'dark';
    document.body.classList.remove('visitor-theme', 'recruitor-theme');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize custom cursor
    updateCursor();
    
    // Mouse move event for cursor
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Keep default cursor visible for Serenity Calm minimalism
    document.body.style.cursor = 'auto';
    
    // Add cursor hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach(element => {
        handleCursorHover(element);
    });
    
    // Page selection functionality
    const selectionCards = document.querySelectorAll('.selection-card');
    selectionCards.forEach(card => {
        card.addEventListener('click', function() {
            const pageType = this.dataset.page;
            if (pageType === 'recruitor') {
                showPage('recruitorPage');
            } else if (pageType === 'visitor') {
                showPage('visitorPage');
            }
        });
    });
    
    // CTA buttons are now direct links, no event listeners needed
    
    // Icons bar functionality
    homeIcon.addEventListener('click', function() {
        window.location.href = '../html/index.html';
    });
    
    educationIcon.addEventListener('click', function() {
        window.location.href = '../html/education.html';
    });
    
    certificationIcon.addEventListener('click', function() {
        window.location.href = 'recruitor.html#certifications';
    });
    
    if (workIcon) {
        workIcon.addEventListener('click', function() {
            window.location.href = '../html/work.html';
        });
    }
    
    projectsIcon.addEventListener('click', function() {
        window.location.href = '../html/projects.html';
    });
    
    contactIcon.addEventListener('click', function() {
        window.location.href = '../html/contact.html';
    });
    
    githubIcon.addEventListener('click', function() {
        // Add your GitHub profile URL here
        window.open('https://github.com/yourusername', '_blank');
    });
    
    linkedinIcon.addEventListener('click', function() {
        // Add your LinkedIn profile URL here
        window.open('https://linkedin.com/in/yourusername', '_blank');
    });
    
    // Parallax for abstract shapes
    // Init tsParticles with provided config
    const particlesEl = document.getElementById('particles-js');
    if (window.tsParticles && particlesEl) {
        // Minimal, known-good v2 config to avoid parsing issues
        window.tsParticles.load('particles-js', {
            fullScreen: { enable: true, zIndex: 0 },
            background: { color: { value: '#2a2a2a' } },
            fpsLimit: 90,
            particles: {
                number: { value: 120, density: { enable: true, area: 800 } },
                color: { value: '#3c6e71' },
                links: { enable: true, color: '#3c6e71', distance: 150, opacity: 0.6, width: 1.2 },
                move: { enable: true, speed: 0.8, outModes: { default: 'out' } },
                opacity: { value: { min: 0.4, max: 0.8 }, animation: { enable: true, speed: 1.2, startValue: 'random' } },
                size: { value: { min: 2, max: 4 } },
                shape: { type: 'circle' }
            },
            interactivity: {
                detectsOn: 'window',
                events: { 
                    onHover: { enable: true, mode: 'grab', parallax: { enable: true, force: 60, smooth: 12 } },
                    onClick: { enable: true, mode: 'push' }
                },
                modes: { 
                    grab: { distance: 220, links: { opacity: 0.8 } },
                    repulse: { distance: 120 },
                    push: { quantity: 6 }
                }
            },
            detectRetina: true
        }).catch(err => console.error('tsParticles load error:', err));
    }

    // Canvas particles (Particle.js-like, lightweight)
    const canvas = document.getElementById('particlesCanvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let particles = [];
    let animationId;

    function resizeCanvas() {
        if (!canvas) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(canvas.clientWidth * dpr);
        canvas.height = Math.floor(canvas.clientHeight * dpr);
        if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
        if (!canvas) return;
        const area = canvas.clientWidth * canvas.clientHeight;
        const density = reduceMotion ? 0.00006 : 0.00012; // particles per px^2
        const count = Math.max(30, Math.min(160, Math.floor(area * density)));
        particles = new Array(count).fill(0).map(() => ({
            x: Math.random() * canvas.clientWidth,
            y: Math.random() * canvas.clientHeight,
            vx: (Math.random() - 0.5) * (reduceMotion ? 0.15 : 0.35),
            vy: (Math.random() - 0.5) * (reduceMotion ? 0.15 : 0.35),
            r: Math.random() * 1.8 + 0.6,
            life: Math.random() * 600 + 600
        }));
    }

    function stepParticles() {
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        const linkDist = reduceMotion ? 80 : 120;
        const linkDist2 = linkDist * linkDist;
        // Move and draw
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 1;
            if (p.x < -10) p.x = canvas.clientWidth + 10;
            if (p.x > canvas.clientWidth + 10) p.x = -10;
            if (p.y < -10) p.y = canvas.clientHeight + 10;
            if (p.y > canvas.clientHeight + 10) p.y = -10;
            if (p.life <= 0) {
                p.x = Math.random() * canvas.clientWidth;
                p.y = Math.random() * canvas.clientHeight;
                p.life = Math.random() * 600 + 600;
            }
            // Dot
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(60, 110, 113, 0.6)';
            ctx.fill();
        });
        // Lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const d2 = dx * dx + dy * dy;
                if (d2 < linkDist2) {
                    const alpha = 1 - d2 / linkDist2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(60, 110, 113, ${0.15 * alpha})`;
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                }
            }
        }
        animationId = requestAnimationFrame(stepParticles);
    }

    if (canvas && ctx) {
        const ro = new ResizeObserver(() => { resizeCanvas(); initParticles(); });
        ro.observe(canvas);
        resizeCanvas();
        initParticles();
        if (!reduceMotion) {
            animationId = requestAnimationFrame(stepParticles);
        }
        // Pause when tab not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(animationId);
            else if (!reduceMotion) animationId = requestAnimationFrame(stepParticles);
        });
    }

    // Add some interactive effects
    // Remove heavy photo-frame effects for the minimal landing
    
    // Initialize dynamic role cycling
    initRoleCycling();
    
    // Initialize futuristic hero interactions
    initFuturisticHero();
    
    // Initialize new page functionality
    initNewPageFeatures();
});

// Dynamic Role Cycling Functionality
function initRoleCycling() {
    const roleWords = document.querySelectorAll('.role-word');
    if (roleWords.length === 0) return;
    
    let currentIndex = 0;
    const roles = Array.from(roleWords).map(word => word.dataset.role);
    
    function cycleRoles() {
        // Remove active class from current word
        roleWords.forEach(word => word.classList.remove('active'));
        
        // Add active class to next word
        roleWords[currentIndex].classList.add('active');
        
        // Move to next role
        currentIndex = (currentIndex + 1) % roles.length;
    }
    
    // Start cycling after initial animation
    setTimeout(() => {
        setInterval(cycleRoles, 2000); // Change every 2 seconds
    }, 3000);
}

// Futuristic Hero Interactions
function initFuturisticHero() {
    // Add hover effects to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click ripple effect
        button.addEventListener('click', function(e) {
            createRipple(e, this);
        });
    });
    
    // Add interactive effects to tech stack items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add parallax effect to geometric elements
    window.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const geoElements = document.querySelectorAll('.geo-element');
        geoElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        const orbs = document.querySelectorAll('.orb');
        orbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.1);
            const x = (mouseX - 0.5) * speed * 30;
            const y = (mouseY - 0.5) * speed * 30;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger entrance animations
                const animatedElements = entry.target.querySelectorAll('.text-content, .visual-container, .tech-stack, .scroll-indicator');
                animatedElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        });
    }, observerOptions);
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
}

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.hero-photo-container, .hero-content, .skill-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
    
    // Add staggered animation for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${0.3 + (index * 0.2)}s`;
    });
    
    // Add parallax effect to floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const floatingElements = document.querySelectorAll('.floating-element');
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add smooth reveal animation for skill cards on hover
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// New Page Features
function initNewPageFeatures() {
    // Certification gallery scroll functionality
    initCertificationGallery();
    
    // Resume button functionality
    initResumeButtons();
    
    // Contact form functionality
    initContactForm();
    
    // Skills hover effects
    initSkillsHover();
    
    // Project card interactions
    initProjectInteractions();
}

// Certification Gallery
function initCertificationGallery() {
    const gallery = document.querySelector('.certifications-gallery');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!gallery) return;
    
    let scrollPosition = 0;
    const scrollAmount = 300;
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            scrollPosition = Math.max(0, scrollPosition - scrollAmount);
            gallery.style.transform = `translateX(-${scrollPosition}px)`;
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const maxScroll = gallery.scrollWidth - gallery.parentElement.clientWidth;
            scrollPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
            gallery.style.transform = `translateX(-${scrollPosition}px)`;
        });
    }
    
    // Pause animation on hover
    gallery.addEventListener('mouseenter', () => {
        gallery.style.animationPlayState = 'paused';
    });
    
    gallery.addEventListener('mouseleave', () => {
        gallery.style.animationPlayState = 'running';
    });
}

// Resume Buttons
function initResumeButtons() {
    const viewBtn = document.querySelector('.view-btn');
    const downloadBtn = document.querySelector('.download-btn');
    
    if (viewBtn) {
        viewBtn.addEventListener('click', function(e) {
            createRipple(e, this);
            // Add your resume view URL here
            window.open('#', '_blank');
        });
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            createRipple(e, this);
            // Add your resume download URL here
            const link = document.createElement('a');
            link.href = '#'; // Add your resume file path
            link.download = '../documents/Varnika Resume.pdf';
            link.click();
        });
    }
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Message sent successfully!', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        info: '#2196F3',
        warning: '#ff9800'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Skills Hover Effects
function initSkillsHover() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Project Interactions
function initProjectInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Project buttons
    const demoBtns = document.querySelectorAll('.demo-btn');
    const repoBtns = document.querySelectorAll('.repo-btn');
    
    demoBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            createRipple(e, this);
            // Add your demo URLs here
            showNotification('Demo link would open here', 'info');
        });
    });
    
    repoBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            createRipple(e, this);
            // Add your repository URLs here
            showNotification('Repository link would open here', 'info');
        });
    });
}

// Social Links
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList.contains('linkedin') ? 'LinkedIn' :
                           this.classList.contains('github') ? 'GitHub' :
                           this.classList.contains('email') ? 'Email' :
                           this.classList.contains('instagram') ? 'Instagram' : 'Social';
            
            showNotification(`${platform} link would open here`, 'info');
        });
    });
}

// Initialize social links when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initSocialLinks();
    initCertificationWall();
    initScrollAnimations();
    initLoadingAnimations();
    initRoleCycling();
    
    // Initialize fluid simulation if on recruitor page
    if (document.getElementById('fluid-canvas')) {
        initFluidSimulation();
    }
});

// Role cycling functionality
function initRoleCycling() {
    const roleWords = document.querySelectorAll('.role-word');
    let currentIndex = 0;
    
    if (roleWords.length === 0) return;
    
    function cycleRoles() {
        // Remove active class from current word
        roleWords[currentIndex].classList.remove('active');
        
        // Move to next word
        currentIndex = (currentIndex + 1) % roleWords.length;
        
        // Add active class to new word
        roleWords[currentIndex].classList.add('active');
    }
    
    // Start cycling every 2 seconds
    setInterval(cycleRoles, 2000);
}

// Scroll-based animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animation elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Loading animations
function initLoadingAnimations() {
    // Staggered animation for hero elements
    const heroElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add loading animation to body
    document.body.style.animation = 'fadeInBody 1s ease-in-out forwards';
}

// Certification Wall Functions
function openCertificationWall() {
    const modal = document.getElementById('certificationWallModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeCertificationWall() {
    const modal = document.getElementById('certificationWallModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function initCertificationWall() {
    // Close modal when clicking outside
    const modal = document.getElementById('certificationWallModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeCertificationWall();
            }
        });
    }
    
    // Download certificate buttons
    const downloadBtns = document.querySelectorAll('.download-cert');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Certificate download would start here', 'info');
        });
    });
}

// Fluid Simulation for Recruitor Page
function initFluidSimulation() {
    const canvas = document.getElementById('fluid-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Initialize canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Fluid simulation variables
    const particles = [];
    const numParticles = 50;
    const mouse = { x: 0, y: 0 };
    const colors = [
        '#3a015c', // russian-violet
        '#4f0147', // palatinate
        '#35012c', // dark-purple
        '#290025', // dark-purple-2
        '#11001c'  // dark-purple-3
    ];
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.size = Math.random() * 3 + 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.5 + 0.2;
            this.life = 1;
            this.decay = Math.random() * 0.02 + 0.01;
        }
        
        update() {
            // Update position
            this.x += this.vx;
            this.y += this.vy;
            
            // Apply mouse attraction
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                this.vx += (dx / distance) * force * 0.1;
                this.vy += (dy / distance) * force * 0.1;
            }
            
            // Apply damping
            this.vx *= 0.98;
            this.vy *= 0.98;
            
            // Boundary collision
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            // Keep particles in bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
            
            // Update life
            this.life -= this.decay;
            if (this.life <= 0) {
                this.reset();
            }
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.life = 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity * this.life;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
    
    // Mouse tracking
    function updateMouse(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }
    
    canvas.addEventListener('mousemove', updateMouse);
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        updateMouse(touch);
    });
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 80) {
                    ctx.save();
                    ctx.globalAlpha = (80 - distance) / 80 * 0.2;
                    ctx.strokeStyle = '#3a015c';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Cleanup function
    return function cleanup() {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        canvas.removeEventListener('mousemove', updateMouse);
        canvas.removeEventListener('touchmove', updateMouse);
    };
}

// ===== RECRUITOR PAGE Q&A FUNCTIONALITY =====

// Q&A Toggle Functionality
function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    const plusIcon = document.getElementById(`plus-${id}`);
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        plusIcon.textContent = '+';
        plusIcon.style.transform = 'rotate(0deg)';
    } else {
        // Close all other answers first
        const allAnswers = document.querySelectorAll('.qa-answer');
        const allIcons = document.querySelectorAll('.plus-icon');
        
        allAnswers.forEach(ans => {
            ans.style.display = 'none';
        });
        
        allIcons.forEach(icon => {
            icon.textContent = '+';
            icon.style.transform = 'rotate(0deg)';
        });
        
        // Open current answer
        answer.style.display = 'block';
        plusIcon.textContent = '−';
        plusIcon.style.transform = 'rotate(180deg)';
    }
}

// Question Modal Functionality
function openQuestionModal() {
    const modal = document.getElementById('questionModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeQuestionModal() {
    const modal = document.getElementById('questionModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Resume Functions
function viewResume() {
    // Open resume in new tab or modal
    window.open('../documents/Varnika Resume.pdf', '_blank');
}

function downloadResume() {
    // Create download link
    const link = document.createElement('a');
    link.href = '../documents/Varnika Resume.pdf';
    link.download = '../documents/Varnika Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
