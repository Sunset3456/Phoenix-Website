/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Portfolio modal logic
    const portfolioModalEl = document.getElementById('portfolioModal');
    let setupPortfolioModal;

    if (portfolioModalEl) {
        const portfolioModal = new bootstrap.Modal(portfolioModalEl);
        const modalTitle = portfolioModalEl.querySelector('.modal-title');
        const modalImage = portfolioModalEl.querySelector('.modal-img');
        const modalCategory = portfolioModalEl.querySelector('.modal-category');
        const modalDescription = portfolioModalEl.querySelector('.modal-description');

        setupPortfolioModal = () => {
            document.querySelectorAll('#gallery .portfolio-box').forEach((box) => {
                box.addEventListener('click', (event) => {
                    event.preventDefault();
                    const title = box.dataset.title || box.title || 'Project';
                    const category = box.dataset.category || 'Category';
                    const description = box.dataset.description || 'More details coming soon.';
                    const imageSrc = box.dataset.image || box.href || box.querySelector('img')?.src;

                    if (modalTitle) modalTitle.textContent = title;
                    if (modalCategory) modalCategory.textContent = category;
                    if (modalDescription) modalDescription.textContent = description;
                    if (modalImage && imageSrc) {
                        modalImage.src = imageSrc;
                        modalImage.alt = title;
                    }

                    portfolioModal.show();
                });
            });
        };
    }

    // Auto-scrolling track (left-to-right) + seamless loop
    const portfolioTrack = document.querySelector('#gallery .portfolio-track');
    const portfolioRow = document.querySelector('#gallery .row');

    if (portfolioTrack && portfolioRow) {
        // Duplicate items so we can loop seamlessly.
        portfolioTrack.innerHTML += portfolioTrack.innerHTML;

        // After duplication, re-bind click handlers (so duplicates also open the modal).
        if (typeof setupPortfolioModal === 'function') {
            setupPortfolioModal();
        }

        let trackHalfWidth = portfolioTrack.scrollWidth / 2;
        let scrollLeft = trackHalfWidth;
        const speed = 40; // pixels per second (adjust as needed)
        let lastTimestamp = null;
        let paused = false;

        // Start in the middle so we can scroll right-to-left visually (left-to-right movement)
        portfolioRow.scrollLeft = scrollLeft;

        const step = (timestamp) => {
            if (paused) {
                lastTimestamp = timestamp;
                window.requestAnimationFrame(step);
                return;
            }

            if (lastTimestamp !== null) {
                const delta = (timestamp - lastTimestamp) / 1000;
                scrollLeft -= speed * delta;

                if (scrollLeft <= 0) {
                    scrollLeft += trackHalfWidth;
                }

                portfolioRow.scrollLeft = scrollLeft;
            }

            lastTimestamp = timestamp;
            window.requestAnimationFrame(step);
        };

        //Pause when hovering over the track (so users can click links without it moving away). Optional.
       /* portfolioRow.addEventListener('mouseenter', () => (paused = true));
        portfolioRow.addEventListener('mouseleave', () => (paused = false)); */ 

        portfolioRow.addEventListener('wheel', (e) => {
            e.preventDefault();
        }, { passive: false });

        window.addEventListener('resize', () => {
            trackHalfWidth = portfolioTrack.scrollWidth / 2;
            scrollLeft = Math.min(scrollLeft, trackHalfWidth);
        });

        window.requestAnimationFrame(step);
    }

});
