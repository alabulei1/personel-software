# Personal Audio Transcription Software - Website Design

**Date:** 2025-01-16
**Status:** Draft

## Overview

A marketing website for personal audio transcription software with three pricing tiers. The product emphasizes privacy, personal control, and intentionally lacks enterprise features.

## Core Messaging

**Tagline:** "Your audio. Your keys. Your privacy. No enterprise bloat."

**Key Differentiators:**
- Personal software, not enterprise
- No team accounts, no cloud processing (unless you choose it)
- No analytics, no data retention
- Customizable prompts for personalized transcription

## Site Structure

### Pages

1. **index.html** - Landing page
2. **pricing.html** - Detailed pricing comparison
3. **docs/index.html** - Documentation hub
4. **blog/index.html** - Blog listing
5. **blog/** - Individual blog posts

### Navigation

Sticky top navigation with:
- Home
- Pricing
- Documentation
- Blog
- Dark/light theme toggle

## Landing Page Structure (index.html)

### Sections (top to bottom)

1. **Hero Section**
   - Headline: "Transcribe Your Audio, Privately."
   - Subheading explaining the three offerings
   - CTA button (adapts or tabs)

2. **"No Enterprise Features" Manifesto**
   - Bold statement about what you DON'T have
   - Lists absent enterprise features

3. **The Three Paths** (pricing cards)
   - **DIY Self-Hosted** - $9.9 one-time
   - **Kill Plaude** - $19.9/month
   - **Concierge** - $199/month

4. **How It Works**
   - Simple 3-step flow with icons

5. **Privacy First**
   - Data handling explanation

6. **FAQ**
   - Common questions

7. **Footer**
   - Links, contact, GitHub repo

## Pricing Tiers

### Tier 1: DIY Self-Hosted - $9.9
- Complete software package
- Installation guides
- User brings: server, API keys
- Support: Community (GitHub issues)
- Target: Technical users

### Tier 2: Kill Plaude - $19.9/month
- Pre-configured VM
- Maintenance and updates included
- User brings: API keys
- **Key feature:** Customizable prompts
- Support: Email for hosting issues
- Target: Semi-technical users who want customization

### Tier 3: Concierge - $199/month
- Everything included
- Hosting, API keys, software
- Priority support
- Target: Non-technical users

## Technical Stack

- **Platform:** Static HTML/CSS
- **Hosting:** GitHub Pages
- **CSS Framework:** Tailwind CSS
- **Accent Color:** Blue (#3B82F6)
- **Features:**
  - Dark/light mode toggle
  - Minimal JavaScript (smooth scroll, mobile menu)
  - Fast loading

## Design Principles

- Clean, minimal aesthetic
- Fast loading times
- Mobile responsive
- Accessible
- Typography: Inter or system fonts (sans-serif), monospace for code

## Target Audience

Mixed audience:
- Technical users (developers, tech enthusiasts)
- Non-technical users (writers, researchers, students)
- Privacy-conscious users (journalists, advocates)

## Next Steps

1. Build landing page (index.html)
2. Implement responsive design
3. Add dark/light mode
4. Test on mobile devices
5. Deploy to GitHub Pages
