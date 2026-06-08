# Workflow Labs Agency Website

A premium, ultra-modern single-page agency website built for **Workflow Labs**—an elite AI automation and strategic consulting partner for mid-sized and large enterprises globally.

## Features

- **Premium Light Aesthetics**: Styled in clean alabaster, soft off-white, and minimal slate tones, featuring subtle metallic gradients and frosted glass (glassmorphism) accents. Strictly light-mode, optimized for high-end enterprise positioning.
- **Optimized 3D Particle Wave Sculpture**: Built using Three.js, a lightweight particle mesh (20x20 grid, 441 points) deforms dynamically in response to mouse hover. Features programmatically-generated 16x16 circular radial glow textures, additive blending (`THREE.AdditiveBlending`), and disabled depth writing for high-performance glowing particles locked at 60fps without lag or wireframes. Automatically falls back to a clean vector graphic on devices with WebGL disabled.
- **Dynamic AI Voice Demo Modal**: A fully interactive simulation of an active briefing call with Workflow Labs Voice AI. Features Web Audio API synthesized ringing, connection tones, dialogue beeps, a ticking call timer, dynamic soundwave height animations, and a sequential mock text transcript simulating a NetSuite Accounts Payable 3-way matching workflow and Slack human-in-the-loop notification.
- **Editorial Typography & Visual Hierarchy**: Styled with modern Google Fonts ('Outfit' and 'Plus Jakarta Sans') and bold, authoritative headings to establish elite positioning.
- **Bento Grid Core Services**: Spotlights three core pillars in a balanced 3-column layout:
  1. **Autonomous Intake Agents** - Qualify incoming inquiries, route tickets, and update CRM records 24/7.
  2. **Cognitive Ingestion Pipelines** - Extract unstructured data from emails, vendor invoices, and PDFs with 99.9% accuracy and sync ERPs.
  3. **Operational Sync & Trigger** - Automate accounts payable matching, customer onboarding, and logistics alerts with human-in-the-loop validation.
- **Proven Automation Blueprints Showcase**: A 6-card interactive grid showcasing ready-to-deploy pipelines for Sales & CRM, Support, Finance, Legal & Docs, Operations, and HR, detailing Triggers, AI Execution, Human-in-the-Loop checks, and quantified efficiency Outcomes.
- **Fully Validated Inquiry Form**: A seamless entry form requesting Name, Company / Organization, Mobile Number, and Primary Operational Bottleneck. Validates Indian mobile number format (`/^(?:\+?91)?([6-9]\d{9})$/`) with visual error highlights and triggers a smooth GSAP success state reveal on submission.
- **Cinematic GSAP ScrollTrigger Animations**: Seamless transitions, staggered card/blueprint entry, scale-in stats, and fluid slide reveals on scroll.

## File Structure

- `index.html` - The complete web template containing layout structures, custom CSS design tokens, three.js/gsap animations, and interactive call logic.
- `README.md` - Technical documentation and guide.

## How to Deploy (GitHub Pages)

To launch this website live on GitHub Pages:
1. Push this code to your GitHub repository (`Workflow-labs-website`).
2. Navigate to repository **Settings** on GitHub.
3. Under **Pages**, select the `master` branch as the build source and click **Save**.
4. Within minutes, the site will be live at `https://surajgzt-eng.github.io/Workflow-labs-website/`.
