# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static HTML/CSS/JS personal portfolio website for Hitarth Parmar (Flutter & App/Web developer). It is based on the **MyResume** template from BootstrapMade and has no build system or package manager — all files are served directly from disk or a static web server.

## Development

To preview locally, open `index.html` directly in a browser, or serve the directory with any static server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There are no build steps, no transpilation, no npm install, and no test suite.

## Architecture

The site is a **single-page application** composed of two HTML files:

- [index.html](index.html) — main portfolio page (Hero, About, Resume, Services, Contact sections)
- [portfolio-details.html](portfolio-details.html) — detail view for individual portfolio projects

### CSS/JS layers

| Layer | Location | Purpose |
|-------|----------|---------|
| Custom styles | [assets/css/style.css](assets/css/style.css) | All site-specific overrides and layout |
| Custom JS | [assets/js/main.js](assets/js/main.js) | Navbar scroll behavior, typed text, AOS init, mobile nav toggle |
| Vendor libs | [assets/vendor/](assets/vendor/) | Bootstrap 5, AOS, Typed.js, GLightbox, Swiper, Isotope, Boxicons, Bootstrap Icons, Waypoints, PureCounter |

### Key behavior in main.js

- Navbar active link tracking is driven by scroll position, not a router.
- Mobile nav is toggled by `.mobile-nav-toggle` (a `<i>` element, not a `<button>`).
- Typed.js reads strings from `data-typed-items` on `.typed` elements.
- AOS (Animate On Scroll) is initialized globally; add `data-aos="..."` attributes to animate elements.

### Contact form

`forms/contact.php` requires the **PHP Email Form** library (pro version of the template). The contact section's front-end validation is handled by [assets/vendor/php-email-form/validate.js](assets/vendor/php-email-form/validate.js).

### SCSS

The `.scss` source files are only available in the pro version of the template. Edit [assets/css/style.css](assets/css/style.css) directly for style changes.

## Content sections in index.html

Sections are identified by `id`: `#hero`, `#about`, `#resume`, `#services`, `#contact`. The `#portfolio` section is currently commented out in the nav and body.
