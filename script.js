/* ========================================
   Waveform Studio — Interactions
   ======================================== */

// ---- Scroll Reveal (IntersectionObserver) ----
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// ---- Nav Shrink on Scroll ----
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// ---- B2B Form Handling ----
const form = document.getElementById('b2b-form');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('form-success');

const validators = {
    name: (v) => v.trim().length >= 2 ? '' : 'Please enter your full name.',
    company: (v) => v.trim().length >= 2 ? '' : 'Please enter your company name.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.',
    phone: (v) => /^[\d\s\-+().]{7,}$/.test(v.trim()) ? '' : 'Please enter a valid phone number.',
};

function validateField(input) {
    const validate = validators[input.name];
    if (!validate) return true;

    const error = validate(input.value);
    const errorEl = input.parentElement.querySelector('.field-error');

    if (error) {
        input.classList.add('invalid');
        if (errorEl) {
            errorEl.textContent = error;
            errorEl.classList.remove('hidden');
        }
        return false;
    }

    input.classList.remove('invalid');
    if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.add('hidden');
    }
    return true;
}

// Live validation on blur
form.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
            validateField(input);
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const requiredInputs = form.querySelectorAll('input[required]');
    let allValid = true;

    requiredInputs.forEach(input => {
        if (!validateField(input)) {
            allValid = false;
        }
    });

    if (!allValid) return;

    // Collect form data
    const data = Object.fromEntries(new FormData(form));
    console.log('B2B Inquiry submitted:', data);

    // Show success state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate submission (replace with real endpoint)
    setTimeout(() => {
        form.querySelectorAll('input, textarea').forEach(el => el.style.display = 'none');
        submitBtn.style.display = 'none';
        successMsg.classList.remove('hidden');
    }, 800);
});
