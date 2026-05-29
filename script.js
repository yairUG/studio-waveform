/* ========================================
   Waveform Studio — Interactions
   ======================================== */

// ---- Scroll Reveal ----
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Stats bar — separate observer, fires early
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-stat').forEach(el => statObserver.observe(el));

// ---- Nav: shrink + darken on scroll ----
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// ---- Scroll indicator: fade out on first scroll ----
const scrollIndicator = document.querySelector('.scroll-line')?.closest('div');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transition = 'opacity 0.5s ease';
        }
    }, { passive: true });
}

// ---- B2B Form ----
const form = document.getElementById('b2b-form');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('form-success');

if (form) {
    const validators = {
        name:    (v) => v.trim().length >= 2 ? '' : 'Please enter your full name.',
        company: (v) => v.trim().length >= 2 ? '' : 'Please enter your company or studio name.',
        email:   (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.',
        phone:   (v) => /^[\d\s\-+().]{7,}$/.test(v.trim())         ? '' : 'Please enter a valid phone number.',
    };

    function validateField(input) {
        const validate = validators[input.name];
        if (!validate) return true;

        const error   = validate(input.value);
        const errorEl = input.closest('.form-field')?.querySelector('.field-error');

        if (error) {
            input.classList.add('invalid');
            if (errorEl) { errorEl.textContent = error; errorEl.classList.remove('hidden'); }
            return false;
        }
        input.classList.remove('invalid');
        if (errorEl) { errorEl.textContent = ''; errorEl.classList.add('hidden'); }
        return true;
    }

    form.querySelectorAll('input[required]').forEach(input => {
        input.addEventListener('blur',  () => validateField(input));
        input.addEventListener('input', () => { if (input.classList.contains('invalid')) validateField(input); });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let allValid = true;
        form.querySelectorAll('input[required]').forEach(input => {
            if (!validateField(input)) allValid = false;
        });
        if (!allValid) return;

        const data = Object.fromEntries(new FormData(form));
        console.log('Waveform B2B Inquiry:', data);

        submitBtn.disabled    = true;
        submitBtn.textContent = 'Sending…';

        setTimeout(() => {
            form.querySelectorAll('.form-field').forEach(f => f.style.display = 'none');
            submitBtn.style.display = 'none';
            successMsg.classList.remove('hidden');
        }, 900);
    });
}
