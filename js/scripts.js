window.addEventListener('DOMContentLoaded', async () => {
    const { OverlayScrollbars, ClickScrollPlugin } = OverlayScrollbarsGlobal;

    OverlayScrollbars.plugin(ClickScrollPlugin);

    document.querySelectorAll('.os-scroll').forEach(el => {
        OverlayScrollbars(el, {
            scrollbars: {
                clickScroll: true,
                theme: 'os-theme-custom',
            },
        });
    });

    let smoother = ScrollSmoother.create({
        wrapper: '.smooth-wrapper',
        content: '.smooth-content',
        smooth: 1,
        effects: true,
    })

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin); 

    //Section fade-in animation
    document.querySelectorAll('.fade-in').forEach(section =>
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 90%',
            },
            opacity: 0,
            duration: 1.5,
            y: 50,
            ease: 'power3.out',
        })
    );

    //Team member fade-in
    document.querySelectorAll('.team-fade').forEach(section =>
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 90%',
            },
            opacity: 0,
            duration: 2,
            y: 50,
            scale: 0.9,
            rotation: -1.5,
            ease: 'power2.out',

        })
    );

    // Card Shine
    const card = document.querySelectorAll('.team-member');
    card.forEach(card => {

        card.addEventListener('mouseenter', () => {
            card.classList.add('shining');
        });

        card.addEventListener('animationend', () => {
            if (card.classList.contains('shining')) {
                card.classList.remove('shining');
            }
        });
    });

    // Split animation
    document.querySelectorAll('.split').forEach((el) => {
        const split = new SplitText(el, { type: 'chars' });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
            },
            duration: 1,
            y: 25,
            scale: 0.8,
            autoAlpha: 0,
            stagger: 0.05,
        });
    });

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

    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('shown.bs.dropdown', () => {
        const menu = dropdown.querySelector('.dropdown-menu');

        gsap.from(menu, { 
            opacity: 0, 
            y: -10, 
            duration: 0.3, 
            ease: 'power2.out' 
        });
    });

    // Navbar hover animation
    const navBrand = document.querySelector('.navbar-brand');
    const navSplit = new SplitText(navBrand, { type: 'chars' });

    navSplit.chars.forEach(char => {
        char.addEventListener('mouseenter', () => {
       
            gsap.to(char, {
                color: '#ff3f00',
                duration: 0.3,
                ease: 'power3.out',
            });
        });

        char.addEventListener('mouseleave', () => {
            gsap.to(char, {
                color: 'inherit',
                delay: 0.5,
                duration: 0.5,
                ease: 'sine.inOut'
            });
        });
    });
    

    // Portfolio modal logic
    const portfolioModalEl = document.getElementById('portfolioModal');
    let setupPortfolioModal;

    document.querySelectorAll('.portfolio-box').forEach(box => {
        box.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });


    // if (portfolioModalEl) {
    //     const portfolioModal = new bootstrap.Modal(portfolioModalEl);
    //     const modalTitle = portfolioModalEl.querySelector('.modal-title');
    //     const modalImage = portfolioModalEl.querySelector('.modal-img');
    //     const modalCategory = portfolioModalEl.querySelector('.modal-category');
    //     const modalDescription = portfolioModalEl.querySelector('.modal-description');

    //     portfolioModalEl.addEventListener('shown.bs.modal', () => {
    //         if (smoother && typeof smoother.paused === 'function') {
    //             smoother.paused(true);
    //         }
    //     });

    //     portfolioModalEl.addEventListener('hidden.bs.modal', () => {
    //         if (smoother && typeof smoother.paused === 'function') {
    //             smoother.paused(false);
    //         }
    //     });

    //     setupPortfolioModal = () => {
    //         document.querySelectorAll('#gallery .portfolio-box').forEach((box) => {
    //             box.addEventListener('click', (event) => {
    //                 event.preventDefault();
    //                 const title = box.dataset.title || box.title || 'Project';
    //                 const category = box.dataset.category || 'Category';
    //                 const description = box.dataset.description || 'More details coming soon.';
    //                 const imageSrc = box.dataset.image || box.href || box.querySelector('img')?.src;

    //                 if (modalTitle) modalTitle.textContent = title;
    //                 if (modalCategory) modalCategory.textContent = category;
    //                 if (modalDescription) modalDescription.textContent = description;
    //                 if (modalImage && imageSrc) {
    //                     modalImage.src = imageSrc;
    //                     modalImage.alt = title;
    //                 }

    //                 portfolioModal.show();
    //             });
    //         });
    //     };
    // }

    // Auto-scrolling track (left-to-right) + seamless loop
    const portfolioTrack = document.querySelector('#gallery .portfolio-track');
    const portfolioRow = document.querySelector('#gallery .row');
    const portfolioBox = document.querySelectorAll('#gallery .portfolio-box');

    if (portfolioTrack && portfolioRow) {
        // Duplicate items so we can loop seamlessly.
        portfolioTrack.innerHTML += portfolioTrack.innerHTML;

        // After duplication, re-bind click handlers (so duplicates also open the modal).
        if (typeof setupPortfolioModal === 'function') {
            setupPortfolioModal();
        }

        let trackHalfWidth = portfolioTrack.scrollWidth / 2;
        let scrollLeft = trackHalfWidth;
        const speedObj = { value: 30 }; // pixels per second
        let lastTimestamp = null;

        // Start in the middle so we can scroll right-to-left visually (left-to-right movement)
        portfolioRow.scrollLeft = scrollLeft;

        const step = (timestamp) => {
            if (lastTimestamp !== null) {
                const delta = (timestamp - lastTimestamp) / 1000;
                scrollLeft -= speedObj.value * delta;

                if (scrollLeft <= 0) {
                    scrollLeft += trackHalfWidth;
                }

                portfolioRow.scrollLeft = scrollLeft;
            }

            lastTimestamp = timestamp;
            window.requestAnimationFrame(step);
        };

        //Pause when hovering over the track with smooth easing
        portfolioRow.addEventListener('mouseenter', () => {
            gsap.to(speedObj, { 
                value: 0, 
                duration: 0.4, 
                ease: 'sine.inOut' 
            });
        });
        portfolioRow.addEventListener('mouseleave', () => {
            gsap.to(speedObj, { 
                value: 30, 
                duration: 0.4, 
                ease: 'sine.inOut' 
            });
        });

        // Hover effect for thumbnail boxes
        gsap.utils.toArray('#gallery .portfolio-box').forEach(box => {
            gsap.to(box, {
                scale: 1.05,
                duration: 0.3,
                paused: true,
                ease: "power3.out"
            })
                .play(0)
                .reverse();

            box.addEventListener('mouseenter', () => gsap.to(box, { 
                scale: 1.02,
                rotation: 'random(-0.5, 0.5)',
            }));

            box.addEventListener('mouseleave', () => gsap.to(box, { 
                scale: 1,
                rotation: 0,
            }));
        });

        window.addEventListener('resize', () => {
            trackHalfWidth = portfolioTrack.scrollWidth / 2;
            scrollLeft = Math.min(scrollLeft, trackHalfWidth);
        });

        window.requestAnimationFrame(step);
    }

    //Counter

    const animateCountUp = el => {
        if (el._countTween) {
            el._countTween.kill();
        }

        const numberEl = el.querySelector('.stat-number') || el;
        const countTo = parseInt(el.dataset.countTo || numberEl.textContent, 10);
        const counterValue = { value: 0 };

        numberEl.textContent = '0';

        el._countTween = gsap.to(counterValue, {
            value: countTo,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
                numberEl.textContent = Math.round(counterValue.value);
            },
            onComplete: () => {
                numberEl.textContent = countTo;
                el._countTween = null;
            }
        });
    };

    document.querySelectorAll('.stat').forEach(el => {
        const numberEl = el.querySelector('.stat-number') || el;
        el.dataset.countTo = parseInt(el.dataset.countTo || numberEl.textContent, 10);
        numberEl.textContent = '0';

        ScrollTrigger.create({
            trigger: el,
            start: 'top 100%',
            // markers: true,
            onEnter: () => animateCountUp(el),
            onEnterBack: () => animateCountUp(el),
            onLeave: () => {
                if (el._countTween) {
                    el._countTween.kill();
                    el._countTween = null;
                }
                const numberEl = el.querySelector('.stat-number') || el;
                numberEl.textContent = '0';
            },
            onLeaveBack: () => {
                if (el._countTween) {
                    el._countTween.kill();
                    el._countTween = null;
                }
                const numberEl = el.querySelector('.stat-number') || el;
                numberEl.textContent = '0';
            },
        });
    });
    
    const svgFiles = [
        "/assets/svg/btn1.svg",
        "/assets/svg/btn2.svg",
        "/assets/svg/btn3.svg"
    ];

    const svgCache = [];

    await Promise.all(
        svgFiles.map(async file => {
            const svg = await fetch(file).then(r => r.text());
            svgCache.push(svg);
        })
    );
    


    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {
        let hoverTween;
        let drawTween;

        btn.addEventListener("mouseenter", () => {

            hoverTween = gsap.to(btn, {
                y: -1,
                scale: 1.005,
                duration: 0.9,
                ease: "sine.inOut",
                transformOrigin: "center center"
            });

            btn.querySelector(".scribble")?.remove();

            // Select a random SVG for this button
            const randomSvg = svgCache[Math.floor(Math.random() * svgCache.length)];
            const svg = new DOMParser().parseFromString(randomSvg, "image/svg+xml").documentElement;
            svg.setAttribute("preserveAspectRatio", "none");
            svg.classList.add("scribble");
            btn.append(svg);

            // animate paths of the newly appended svg
            const paths = svg.querySelectorAll("path");
            gsap.set(paths, { drawSVG: "0%" });
            paths.forEach(path => {
                drawTween = gsap.fromTo(
                    path,
                    { drawSVG: 0 },
                    { drawSVG: "100%", duration: 0.5, ease: "power3.in" }
                );
            });
        });

        btn.addEventListener("mouseleave", () => {
            hoverTween?.kill();

            gsap.to(btn, {
                y: 0,
                rotation: 0,
                scale: 1,
                duration: 0.25,
                ease: "power2.out"
            });

            // animate and then remove the current scribble svg
            const current = btn.querySelector('.scribble');
            const cpaths = current.querySelectorAll('path');

            cpaths.forEach(path => {
                gsap.fromTo(path,
                    { drawSVG: "0% 100%" },
                    { drawSVG: "100% 100%", duration: 0.5, ease: "power3.inOut" }
                );
            });
            // remove after animation
            setTimeout(() => current.remove(), 500);
            
        });

    });

    

    

});

