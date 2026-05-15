// =============================================================================
// script.js — modal-system
// =============================================================================

// ── DOM Objects ───────────────────────────────────────────────────────────────
const DOM = {
    app:         document.getElementById('app'),
    themeToggle: document.getElementById('themeToggle'),
};

// ── State ─────────────────────────────────────────────────────────────────────
const state = {
    theme: localStorage.getItem('theme') || 'light',
};

// ── Functions ─────────────────────────────────────────────────────────────────
function setTheme(theme) {
    state.theme = theme;

    document.documentElement.setAttribute('data-theme', theme);
    
    const icon = DOM.themeToggle.querySelector('.theme-toggle__icon');
    
    icon.src = 
         theme === 'dark' ? './assets/sun-bright.svg' : './assets/moon.svg';

    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    setTheme(state.theme === 'dark' ? 'light' : 'dark');
}

function init() {
    setTheme(state.theme);
    console.log('modal-system — ready.');
}

// ── Event Listeners ───────────────────────────────────────────────────────────
DOM.themeToggle.addEventListener('click', toggleTheme);

// ── Init ──────────────────────────────────────────────────────────────────────
init();
