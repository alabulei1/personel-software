// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIconLight = document.getElementById('theme-icon-light');
const themeIconDark = document.getElementById('theme-icon-dark');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    html.classList.add('dark');
    themeIconDark.classList.add('hidden');
    themeIconLight.classList.remove('hidden');
} else {
    themeIconLight.classList.add('hidden');
    themeIconDark.classList.remove('hidden');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');

    // Toggle icons
    themeIconLight.classList.toggle('hidden');
    themeIconDark.classList.toggle('hidden');

    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
