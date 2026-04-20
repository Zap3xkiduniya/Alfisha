// Global variables
let currentScreen = 1;
let musicPlaying = false;
const totalScreens = 4;

// DOM Elements
const screens = document.querySelectorAll('.screen');
const loadingScreen = document.getElementById('loading-screen');
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Start floating hearts
    createFloatingHearts();
    
    // Loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.classList.add('loaded');
        }, 500);
    }, 2500);
    
    // Music toggle
    musicToggle.addEventListener('click', toggleMusic);
    
    // Prevent context menu on mobile
    document.addEventListener('contextmenu', e => e.preventDefault());
});

// Screen navigation
function nextScreen() {
    if (currentScreen < totalScreens) {
        screens[currentScreen - 1].classList.remove('active');
        screens[currentScreen - 1].classList.add('prev');
        
        currentScreen++;
        screens[currentScreen - 1].classList.add('active');
        
        // Trigger animations for new screen
        if (currentScreen === 3) {
            setTimeout(() => animateRomanticText(), 300);
        }
    }
}

// Floating Hearts Background
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = ['💖', '💕', '💗', '💝', '✨'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 7000);
    }, 300);
}

// Music Toggle
function toggleMusic() {
    const icon = musicToggle.querySelector('i');
    
    if (musicPlaying) {
        backgroundMusic