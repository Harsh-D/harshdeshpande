// =============================================
// HARSH DESHPANDE · PORTFOLIO SCRIPT
// theme toggle · terminal typing · scroll reveal · active nav
// =============================================

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- theme toggle ---------- */
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

/* ---------- terminal typing ---------- */
const termLines = [
    { cmd: true, text: '$ whoami' },
    { cmd: false, text: 'Harsh Deshpande — Senior Software Engineer' },
    { cmd: true, text: '$ stack --list' },
    { cmd: false, text: '.NET · React · TypeScript · Kubernetes · Azure' },
    { cmd: true, text: '$ focus' },
    { cmd: false, text: 'cloud-native, event-driven hearing care' },
    { cmd: true, text: '$ motto' },
    { cmd: false, text: '"Little progress every day..."' },
    { cmd: true, text: '$ ' },
];

const termOutput = document.getElementById('term-output');

function typeTerminal() {
    termOutput.textContent = '';
    let lineIndex = 0;
    let charIndex = 0;

    function typeStep() {
        if (lineIndex >= termLines.length) {
            if (reduceMotion) return; // show once, stay put
            // done — pause, clear, restart
            setTimeout(typeTerminal, 5000);
            return;
        }

        const line = termLines[lineIndex];
        const span = document.createElement('span');
        span.className = line.cmd ? 'term-cmd' : 'term-out';
        termOutput.appendChild(span);

        if (reduceMotion) {
            span.textContent = line.text + '\n';
            lineIndex++;
            typeStep();
            return;
        }

        const interval = setInterval(() => {
            span.textContent = line.text.slice(0, ++charIndex);
            if (charIndex >= line.text.length) {
                clearInterval(interval);
                span.textContent += '\n';
                charIndex = 0;
                lineIndex++;
                setTimeout(typeStep, 120);
            }
        }, 28);
    }

    typeStep();
}

typeTerminal();

/* ---------- reveal on scroll ---------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        }
    },
    { threshold: 0.12 }
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- active nav link ---------- */
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        }
    },
    { rootMargin: '-35% 0px -55% 0px' }
);
document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));
