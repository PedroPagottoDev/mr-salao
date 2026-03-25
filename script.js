// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(link.getAttribute('href'))
        if (target) target.scrollIntoView({ behavior: 'smooth' })
    })
})

// ===== MENU MOBILE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ===== ANIMAÇÃO AO SCROLL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay * 80);
        }
    });
}, { threshold: 0.1 });

// ===== ANIMAÇÕES AO ROLAR =====
document.querySelectorAll('.sobre, .section-header, .endereco, .mapa-container').forEach(el => {
    el.classList.add('reveal')
    observer.observe(el)
})

document.querySelectorAll('.servico-card, .horario-item').forEach(el => {
    observer.observe(el)
})

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
}, { threshold: 0.15 })

document.querySelectorAll('.reveal').forEach(el => observer2.observe(el))