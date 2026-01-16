# Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a responsive landing page for personal audio transcription software with dark mode, three pricing tiers, and clear positioning.

**Architecture:** Single-page static HTML with Tailwind CSS via CDN, minimal vanilla JS for theme toggle and mobile menu, deployed to GitHub Pages.

**Tech Stack:** HTML5, Tailwind CSS (CDN), Vanilla JavaScript, GitHub Pages hosting

---

## Task 1: Initialize project structure and HTML skeleton

**Files:**
- Create: `index.html`
- Create: `.gitignore`
- Create: `README.md`

**Step 1: Create .gitignore**

```bash
cat > .gitignore << 'EOF'
.DS_Store
*.log
EOF
```

**Step 2: Create README with project info**

```bash
cat > README.md << 'EOF'
# Personal Audio Transcription Software

A privacy-focused personal audio transcription tool with no enterprise features.

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deployment

Hosted on GitHub Pages from the main branch.
EOF
```

**Step 3: Initialize git repository**

```bash
git init
git add .gitignore README.md
git commit -m "chore: initialize project structure"
```

---

## Task 2: Create HTML skeleton with Tailwind CSS

**Files:**
- Create: `index.html`

**Step 1: Write HTML skeleton with Tailwind CDN**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Audio Transcription - Your Audio, Your Keys, Your Privacy</title>
    <meta name="description" content="Privacy-focused audio transcription software. No enterprise features. Just your audio, your keys, your privacy.">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#3B82F6',
                        primaryDark: '#2563EB',
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom styles */
        body {
            font-family: system-ui, -apple-system, sans-serif;
        }
    </style>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
    <!-- Navigation will go here -->
    <nav></nav>

    <!-- Hero Section -->
    <section></section>

    <!-- No Enterprise Manifesto -->
    <section></section>

    <!-- Pricing Cards -->
    <section></section>

    <!-- How It Works -->
    <section></section>

    <!-- Privacy First -->
    <section></section>

    <!-- FAQ -->
    <section></section>

    <!-- Footer -->
    <footer></footer>

    <script src="script.js"></script>
</body>
</html>
```

**Step 2: Verify in browser**

Open `index.html` in browser - should see blank white page with no errors in console.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add HTML skeleton with Tailwind CSS"
```

---

## Task 3: Build navigation bar with dark mode toggle

**Files:**
- Modify: `index.html` (nav section)
- Create: `script.js`

**Step 1: Add navigation HTML**

Replace `<nav></nav>` in index.html with:

```html
<nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <a href="#" class="text-2xl font-bold text-primary">Transcribe</a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="#pricing" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition">Pricing</a>
                <a href="#docs" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition">Documentation</a>
                <a href="#faq" class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition">FAQ</a>
                <button id="theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition" aria-label="Toggle dark mode">
                    <svg id="theme-icon-light" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                    </svg>
                    <svg id="theme-icon-dark" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                    </svg>
                </button>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button id="mobile-menu-button" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="hidden md:hidden pb-4">
            <div class="flex flex-col space-y-2">
                <a href="#pricing" class="px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Pricing</a>
                <a href="#docs" class="px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Documentation</a>
                <a href="#faq" class="px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">FAQ</a>
            </div>
        </div>
    </div>
</nav>
```

**Step 2: Create script.js with theme toggle logic**

```javascript
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
```

**Step 3: Test theme toggle**

Open index.html in browser, click the theme toggle button multiple times.
Expected: Background changes between white and dark gray, icons switch, preference persists on refresh.

**Step 4: Test mobile menu**

Resize browser to mobile width, click hamburger menu.
Expected: Mobile menu appears/disappears.

**Step 5: Commit**

```bash
git add index.html script.js
git commit -m "feat: add navigation with dark mode toggle and mobile menu"
```

---

## Task 4: Build hero section

**Files:**
- Modify: `index.html` (hero section)

**Step 1: Add hero section HTML**

Replace `<section></section>` (first one, after nav) with:

```html
<!-- Hero Section -->
<section class="relative overflow-hidden py-20 sm:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                <span class="block">Transcribe Your Audio,</span>
                <span class="block text-primary">Privately.</span>
            </h1>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                Your audio. Your keys. Your privacy. No enterprise bloat. Just fast, accurate transcription that you control.
            </p>
            <div class="mt-10 flex justify-center gap-4">
                <a href="#pricing" class="px-8 py-3 bg-primary hover:bg-primaryDark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Get Started
                </a>
                <a href="#how-it-works" class="px-8 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold rounded-lg transition-all">
                    Learn More
                </a>
            </div>
        </div>
    </div>

    <!-- Decorative background elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
    </div>
</section>
```

**Step 2: Test hero section**

Open in browser, verify:
- Headline displays correctly on desktop and mobile
- Buttons have hover effects
- Background decorative elements visible
- Text is readable in both light and dark mode

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add hero section with CTA buttons"
```

---

## Task 5: Build "No Enterprise Features" manifesto section

**Files:**
- Modify: `index.html` (manifesto section)

**Step 1: Add manifesto section HTML**

Replace the second `<section></section>` with:

```html
<!-- No Enterprise Manifesto -->
<section class="py-16 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">No Enterprise Features. Period.</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                This is personal software. Intentionally. Here's what you'll NEVER find:
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div class="flex items-start space-x-3 p-4">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">No team accounts</span>
            </div>

            <div class="flex items-start space-x-3 p-4">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">No cloud data processing</span>
            </div>

            <div class="flex items-start space-x-3 p-4">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">No analytics or tracking</span>
            </div>

            <div class="flex items-start space-x-3 p-4">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">No data retention</span>
            </div>

            <div class="flex items-start space-x-3 p-4">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">No user management</span>
            </div>

            <div class="flex items-start space-x-3 p-4">
                <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">No subscription lock-in</span>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Test manifesto section**

Verify in browser:
- Section has different background color
- Grid layout responsive (3 columns on desktop, 2 on tablet, 1 on mobile)
- X icons display correctly in red
- All text readable in both themes

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add 'No Enterprise Features' manifesto section"
```

---

## Task 6: Build pricing cards section

**Files:**
- Modify: `index.html` (pricing section)

**Step 1: Add pricing section HTML**

Replace the third `<section></section>` with:

```html
<!-- Pricing Section -->
<section id="pricing" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Choose Your Path</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Three ways to transcribe. All private. All yours.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Tier 1: DIY -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 flex flex-col">
                <h3 class="text-xl font-bold mb-2">DIY Self-Hosted</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">For technical users who want full control</p>
                <div class="mb-6">
                    <span class="text-4xl font-bold">$9.9</span>
                    <span class="text-gray-600 dark:text-gray-400">one-time</span>
                </div>
                <ul class="space-y-3 mb-8 flex-grow">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Complete software package</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Step-by-step installation guide</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Docker image included</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Community support (GitHub)</span>
                    </li>
                    <li class="flex items-start text-gray-500 dark:text-gray-400">
                        <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                        </svg>
                        <span>Bring your own server & keys</span>
                    </li>
                </ul>
                <a href="#" class="block w-full text-center px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold rounded-lg transition">
                    Buy Now
                </a>
            </div>

            <!-- Tier 2: Kill Plaude -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-primary p-8 flex flex-col relative">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span class="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
                </div>
                <h3 class="text-xl font-bold mb-2">Kill Plaude</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">Customizable transcription, your keys</p>
                <div class="mb-6">
                    <span class="text-4xl font-bold">$19.9</span>
                    <span class="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul class="space-y-3 mb-8 flex-grow">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Pre-configured VM ready to use</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Maintenance & updates included</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span><strong>Customizable prompts</strong> - tweak AI behavior</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Email support for hosting</span>
                    </li>
                    <li class="flex items-start text-gray-500 dark:text-gray-400">
                        <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                        </svg>
                        <span>Bring your own API keys</span>
                    </li>
                </ul>
                <a href="#" class="block w-full text-center px-6 py-3 bg-primary hover:bg-primaryDark text-white font-semibold rounded-lg transition">
                    Get Started
                </a>
            </div>

            <!-- Tier 3: Concierge -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 flex flex-col">
                <h3 class="text-xl font-bold mb-2">Concierge</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-6">We do everything. Just upload.</p>
                <div class="mb-6">
                    <span class="text-4xl font-bold">$199</span>
                    <span class="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <ul class="space-y-3 mb-8 flex-grow">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Everything included</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Hosting & API keys included</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>We handle setup & maintenance</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Priority email support</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Just upload audio, get transcripts</span>
                    </li>
                </ul>
                <a href="#" class="block w-full text-center px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold rounded-lg transition">
                    Contact Us
                </a>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Test pricing section**

Verify in browser:
- Three cards display correctly on desktop (side by side)
- Middle card (Kill Plaude) has blue border and "Popular" badge
- Cards stack vertically on mobile
- All checkmarks and X icons visible
- Buttons have hover states
- Text readable in both themes

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add pricing cards section with three tiers"
```

---

## Task 7: Build "How It Works" section

**Files:**
- Modify: `index.html` (how it works section)

**Step 1: Add "How It Works" section HTML**

Replace the fourth `<section></section>` with:

```html
<!-- How It Works -->
<section id="how-it-works" class="py-20 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Get started in minutes, not hours
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <!-- Step 1 -->
            <div class="text-center">
                <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    1
                </div>
                <h3 class="text-xl font-semibold mb-3">Choose Your Plan</h3>
                <p class="text-gray-600 dark:text-gray-400">
                    Pick the option that fits your technical comfort and privacy needs.
                </p>
            </div>

            <!-- Step 2 -->
            <div class="text-center">
                <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    2
                </div>
                <h3 class="text-xl font-semibold mb-3">Upload Your Audio</h3>
                <p class="text-gray-600 dark:text-gray-400">
                    Drag and drop your audio files. We support MP3, WAV, M4A, and more.
                </p>
            </div>

            <!-- Step 3 -->
            <div class="text-center">
                <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    3
                </div>
                <h3 class="text-xl font-semibold mb-3">Get Your Transcript</h3>
                <p class="text-gray-600 dark:text-gray-400">
                    Receive accurate, fast transcription. Your data is never stored or shared.
                </p>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Test "How It Works" section**

Verify in browser:
- Three numbered circles display correctly
- Steps stack vertically on mobile
- Background color alternates from previous section
- All text readable in both themes

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add 'How It Works' section with three steps"
```

---

## Task 8: Build Privacy First section

**Files:**
- Modify: `index.html` (privacy section)

**Step 1: Add Privacy First section HTML**

Replace the fifth `<section></section>` with:

```html
<!-- Privacy First -->
<section class="py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
            <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Privacy First, Always.</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Your audio files are processed and immediately deleted. We don't store your data. We don't sell your data. We don't even look at your data.
        </p>
        <div class="grid md:grid-cols-3 gap-6 text-left">
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 class="font-semibold mb-2">No Data Retention</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Transcripts are deleted immediately after delivery. Zero storage on our servers.</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 class="font-semibold mb-2">Your Keys, Your Control</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Bring your own API keys. We never see them or have access to your accounts.</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 class="font-semibold mb-2">Open & Transparent</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">Open source software. Audit the code yourself. No hidden tracking or analytics.</p>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Test Privacy section**

Verify in browser:
- Shield icon displays correctly
- Three feature cards grid layout
- Responsive on mobile
- All text readable in both themes

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Privacy First section"
```

---

## Task 9: Build FAQ section

**Files:**
- Modify: `index.html` (FAQ section)

**Step 1: Add FAQ section HTML**

Replace the sixth `<section></section>` with:

```html
<!-- FAQ Section -->
<section id="faq" class="py-20 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400">
                Everything you need to know
            </p>
        </div>

        <div class="space-y-4">
            <!-- FAQ Item 1 -->
            <details class="bg-white dark:bg-gray-800 rounded-lg shadow-sm group">
                <summary class="cursor-pointer p-6 font-semibold flex justify-between items-center list-none">
                    <span>What audio formats do you support?</span>
                    <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400">
                    We support all common audio formats including MP3, WAV, M4A, FLAC, OGG, and more. If you can play it, we can transcribe it.
                </div>
            </details>

            <!-- FAQ Item 2 -->
            <details class="bg-white dark:bg-gray-800 rounded-lg shadow-sm group">
                <summary class="cursor-pointer p-6 font-semibold flex justify-between items-center list-none">
                    <span>How accurate is the transcription?</span>
                    <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400">
                    We use state-of-the-art AI models (Whisper, GPT-4) that achieve 95-99% accuracy for clear audio. Accuracy varies based on audio quality, background noise, and speaker clarity.
                </div>
            </details>

            <!-- FAQ Item 3 -->
            <details class="bg-white dark:bg-gray-800 rounded-lg shadow-sm group">
                <summary class="cursor-pointer p-6 font-semibold flex justify-between items-center list-none">
                    <span>What languages are supported?</span>
                    <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400">
                    We support over 50 languages including English, Spanish, French, German, Chinese, Japanese, and many more. The AI automatically detects the language.
                </div>
            </details>

            <!-- FAQ Item 4 -->
            <details class="bg-white dark:bg-gray-800 rounded-lg shadow-sm group">
                <summary class="cursor-pointer p-6 font-semibold flex justify-between items-center list-none">
                    <span>Is my data safe?</span>
                    <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400">
                    Absolutely. Your audio files are processed and immediately deleted. We don't store your data, we don't train on your data, and we don't share your data. With the DIY and Kill Plaude plans, your data never leaves your control.
                </div>
            </details>

            <!-- FAQ Item 5 -->
            <details class="bg-white dark:bg-gray-800 rounded-lg shadow-sm group">
                <summary class="cursor-pointer p-6 font-semibold flex justify-between items-center list-none">
                    <span>Can I customize the transcription?</span>
                    <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </summary>
                <div class="px-6 pb-6 text-gray-600 dark:text-gray-400">
                    Yes! The Kill Plaude plan includes customizable prompts - you can add custom vocabulary, specify formatting rules, and guide how the AI interprets your audio.
                </div>
            </details>
        </div>
    </div>
</section>
```

**Step 2: Test FAQ section**

Verify in browser:
- Click each FAQ item, it expands/collapses
- Chevron icon rotates when expanded
- All FAQs readable in both themes
- Smooth animations

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add FAQ section with 5 questions"
```

---

## Task 10: Build footer

**Files:**
- Modify: `index.html` (footer section)

**Step 1: Add footer HTML**

Replace `<footer></footer>` with:

```html
<!-- Footer -->
<footer class="bg-gray-900 text-gray-400 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
            <div>
                <h3 class="text-white text-lg font-semibold mb-4">Transcribe</h3>
                <p class="text-sm">Personal audio transcription software. Privacy-focused, no enterprise features.</p>
            </div>
            <div>
                <h4 class="text-white font-semibold mb-4">Product</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#pricing" class="hover:text-white transition">Pricing</a></li>
                    <li><a href="#docs" class="hover:text-white transition">Documentation</a></li>
                    <li><a href="#faq" class="hover:text-white transition">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-semibold mb-4">Legal</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-semibold mb-4">Connect</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-white transition">GitHub</a></li>
                    <li><a href="#" class="hover:text-white transition">Email</a></li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 Personal Audio Transcription. All rights reserved.</p>
        </div>
    </div>
</footer>
```

**Step 2: Test footer**

Verify in browser:
- Footer displays at bottom of page
- Four column layout on desktop
- Stacks vertically on mobile
- Links have hover states
- Copyright visible

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add footer with links and copyright"
```

---

## Task 11: Final testing and responsive design verification

**Files:**
- All existing files

**Step 1: Test on different screen sizes**

Open browser DevTools, test at:
- Mobile: 375px width
- Tablet: 768px width
- Desktop: 1920px width

Check for:
- Navigation collapses to hamburger menu on mobile
- All sections stack correctly
- Text is readable at all sizes
- No horizontal scrolling
- Buttons and cards are appropriately sized

**Step 2: Test dark mode**

Toggle dark mode multiple times, verify:
- All sections change color correctly
- No flickering
- Text remains readable
- Icons and borders visible

**Step 3: Test smooth scrolling**

Click navigation links, verify:
- Smooth scroll to each section
- Mobile menu closes after clicking link
- Offset from sticky nav works correctly

**Step 4: Check accessibility**

Run through keyboard navigation:
- Tab through all interactive elements
- Check focus states are visible
- Verify semantic HTML structure

**Step 5: Final commit**

```bash
git add .
git commit -m "chore: complete landing page implementation and testing"
```

---

## Task 12: Prepare for GitHub Pages deployment

**Files:**
- No file changes (git setup)

**Step 1: Initialize repository (if not already done)**

```bash
git init
git add .
git commit -m "feat: initial landing page implementation"
```

**Step 2: Create GitHub repository**

Visit https://github.com/new and create a new repository named `personel-software`

**Step 3: Add remote and push**

```bash
git remote add origin https://github.com/YOUR_USERNAME/personel-software.git
git branch -M main
git push -u origin main
```

**Step 4: Enable GitHub Pages**

1. Go to repository Settings
2. Navigate to Pages
3. Source: Deploy from a branch
4. Branch: main / root
5. Save

**Step 5: Verify deployment**

Visit `https://YOUR_USERNAME.github.io/personel-software/` after 1-2 minutes

**Step 6: Commit deployment info**

```bash
echo "# Deployment

Site is deployed on GitHub Pages: https://YOUR_USERNAME.github.io/personel-software/

## Local Development

Open index.html directly in browser or:
```bash
python3 -m http.server 8000
```
" >> README.md

git add README.md
git commit -m "docs: add deployment information to README"
```

---

## Summary

This plan builds a complete, production-ready landing page with:

- Responsive design (mobile, tablet, desktop)
- Dark/light mode with preference persistence
- Six main sections (hero, manifesto, pricing, how it works, privacy, FAQ)
- Three-tier pricing cards
- Sticky navigation with mobile menu
- Fast loading with minimal JavaScript
- Tailwind CSS via CDN
- GitHub Pages deployment ready

**Total estimated time:** 1-2 hours for full implementation
**Commit count:** 12 commits, one per task
