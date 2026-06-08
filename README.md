# Workflow Labs Agency Website

A premium, ultra-modern single-page agency website built for **Workflow Labs**—an elite AI automation and strategic consulting partner for real estate developers and property agencies in Bengaluru, India.

## Features

- **Premium Light Aesthetics**: Styled in clean alabaster, soft off-white, and minimal slate tones, featuring subtle metallic gradients and frosted glass (glassmorphism) accents. Strictly light-mode, optimized for luxury real estate branding.
- **Interactive 3D Wave Kinetic Sculpture**: Built using Three.js, a high-performance WebGL mesh grid rotates and deforms dynamically in response to mouse hover and pointer coordinate physics. Automatically falls back to a clean vector graphic on devices with WebGL disabled.
- **Dynamic AI Voice Demo Modal**: A fully interactive simulation of an active briefing call with Workflow Labs Voice AI. Features Web Audio API synthesized ringing, connection tones, dialogue beeps, a ticking call timer, dynamic soundwave height animations, and a sequential mock text transcript.
- **Editorial Typography & Visual Hierarchy**: Styled with modern Google Fonts ('Outfit' and 'Plus Jakarta Sans') and bold, authoritative headings to establish elite positioning.
- **Bento Grid Core Services**: Spotlights AI Calling & Qualification alongside Automated Lead Pipelines inside 3D cards that tilt dynamically in response to cursor position.
- **Fully Validated Inquiry Form**: A seamless entry form requesting Name, Company, and Mobile Number. Validates Indian mobile number format (`/^(?:\+?91)?([6-9]\d{9})$/`) with visual error highlights and triggers a smooth GSAP success state reveal on submission.
- **Cinematic GSAP ScrollTrigger Animations**: Seamless transitions, scale-in numbers, and fluid slide reveals on scroll.

## File Structure

- `index.html` - The complete web template containing layout structures, custom CSS design tokens, three.js/gsap animations, and interactive call logic.
- `README.md` - Technical documentation and guide.

## How to Deploy (GitHub Pages)

To launch this website live on GitHub Pages:
1. Push this code to your GitHub repository (`Workflow-labs-website`).
2. Navigate to repository **Settings** on GitHub.
3. Under **Pages**, select the `master` branch as the build source and click **Save**.
4. Within minutes, the site will be live at `https://surajgzt-eng.github.io/Workflow-labs-website/`.
