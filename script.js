// =============================================================================
// script.js — modal-system
// =============================================================================

// ── DOM Objects ───────────────────────────────────────────────────────────────
const DOM = {
    app:         document.getElementById('app'),
    themeToggle: document.getElementById('themeToggle'),
    modal:       document.querySelector('#sign-in-modal'),
    openBtn:     document.querySelector('#open-modal-btn'),
    closeBtn:    document.querySelector('#close-modal-btn'),
    modal2:      document.querySelector('#password-generator-modal'),
    openBtn2:    document.querySelector('#open-modal-btn2'),
    closeBtn2:   document.querySelector('#close-modal-btn2'),


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

function showModal() {
    DOM.modal.showModal();

}

function closeModal(){
    DOM.modal.close();
}

function openModal2(){
    DOM.modal2.showModal();

}

function closeModal2(){
    DOM.modal2.close();

}

function init() {
    setTheme(state.theme);
    console.log('modal-system — ready.');
}



// ── Event Listeners ───────────────────────────────────────────────────────────
DOM.themeToggle.addEventListener('click', toggleTheme);
DOM.openBtn.addEventListener('click', showModal);
DOM.closeBtn.addEventListener('click', closeModal);
DOM.openBtn2.addEventListener('click', openModal2);
DOM.closeBtn2.addEventListener('click', closeModal2);
// for closing modals by clicking outside of em.
DOM.modal.addEventListener('click', (e) => {
  if (e.target === DOM.modal) DOM.modal.close();
});

DOM.modal2.addEventListener('click', (e) => {
  if (e.target === DOM.modal2) DOM.modal2.close();
});


// ── Init ──────────────────────────────────────────────────────────────────────
init();
