gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.5,
    effects: true,
})

const cards = [
    { id: "#card-one", endTranslateX: -150, rotate: 2},
    { id: "#card-two", endTranslateX: -200, rotate: -4 },
    { id: "#card-three", endTranslateX: -250, rotate: -3 },
    { id: "#card-four", endTranslateX: -300, rotate: 3},
];


ScrollTrigger.create({
    trigger: ".parallax-section",
    start: 'top top',
    end: "+=1000vh",
    scrub: 1,
    pin: true,
    onUpdate: (self => {
        gsap.to('.img-cont', {
            // x: `${-350 * self.progress}vw`,
            x: -350 * self.progress ,
            duration: 2,
            ease: 'power3.out'
        })
    })
});

cards.forEach(card =>{
    ScrollTrigger.create({
        trigger: 'img',
        start: 'top top',
        end: '+=1000vh',
        scrub: 1,
        onUpdate: (self => {
            gsap.to(card.id, {
                x: `${card.endTranslateX * self.progress}px`,
                rotate: `${card.rotate * self.progress}`,
                duration: 0.5,
                ease: 'power3.out'
            })
        })
    })
});


/*
const imgs = document.querySelectorAll('.img');
if (imgs.length) {
    smoother.effects(imgs, { speed: "auto" });    
}

const parallaxSection = document.querySelector('.parallax-section');
if (parallaxSection) {
    ScrollTrigger.create({
        trigger: parallaxSection,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
        scrub: true,
        // markers: true,
    });

    // gsap.utils.toArray('.parallax-section .img-cont img').forEach((img) => {
    //     const speed = Number(img.dataset.speed) || 3;
    //     gsap.to(img, {
    //         y: -speed,
    //         x: 0,
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: parallaxSection,
    //             start: 'top top',
    //             end: 'bottom top',
    //             scrub: true,
                
    //         },
    //     });
    // });
}
*/

//Section fade-in animation
document.querySelectorAll('.fade-in').forEach(section =>
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 90%',
        },
        opacity: 0,
        duration: 2,
        y: 50,
        ease: 'power4.out',
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
        rotation: -5,
        ease: 'back.inOut',

    })
);




// function loadHTML(elementId, file) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => document.getElementById(elementId).innerHTML = data);
// }

// document.addEventListener("DOMContentLoaded", function () {
//     loadHTML("navbar", "navbar.html");
//     loadHTML("footer", "footer.html");
// });

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

    // Portfolio modal logic
    const portfolioModalEl = document.getElementById('portfolioModal');
    let setupPortfolioModal;

    if (portfolioModalEl) {
        const portfolioModal = new bootstrap.Modal(portfolioModalEl);
        const modalTitle = portfolioModalEl.querySelector('.modal-title');
        const modalImage = portfolioModalEl.querySelector('.modal-img');
        const modalCategory = portfolioModalEl.querySelector('.modal-category');
        const modalDescription = portfolioModalEl.querySelector('.modal-description');

        portfolioModalEl.addEventListener('shown.bs.modal', () => {
            if (smoother && typeof smoother.paused === 'function') {
                smoother.paused(true);
            }
        });

        portfolioModalEl.addEventListener('hidden.bs.modal', () => {
            if (smoother && typeof smoother.paused === 'function') {
                smoother.paused(false);
            }
        });

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

        //Pause when hovering over the track (so users can click links without it moving away).
        // portfolioRow.addEventListener('mouseenter', () => (paused = true));
        // portfolioRow.addEventListener('mouseleave', () => (paused = false));

        gsap.utils.toArray('#gallery .portfolio-box').forEach(box => {
            gsap.to(box, {
                scale: 1.05,
                duration: 0.3,
                paused: true,
                ease: "power3.out"
            })
                .play(0)
                .reverse();

            box.addEventListener('mouseenter', () => gsap.to(box, { scale: 1.02 }));
            box.addEventListener('mouseleave', () => gsap.to(box, { scale: 1 }));
        });

        window.addEventListener('resize', () => {
            trackHalfWidth = portfolioTrack.scrollWidth / 2;
            scrollLeft = Math.min(scrollLeft, trackHalfWidth);
        });

        window.requestAnimationFrame(step);
    }


    
    // document.querySelectorAll('.modal').addEventListener("click", () => {
    //     
        
    // });
    

    //Sparks

    const rng = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rcg = colors => {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const distance = (x1, y1, x2, y2) => {
        const xDist = x2 - x1
        const yDist = y2 - y1
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    }

    let canvas, c, animationID

    const mouse = {
        x: undefined,
        y: undefined,
        prevX: undefined,
        prevY: undefined,
        counter: 0,
        isMoving: () => {
            if (mouse.counter > 50) return false
            return true
        }
    }

    let maxRadius
    const fireflies = []
    const animationLoop = _ => {
        animationID = requestAnimationFrame(animationLoop) // Create an animation loop
        c.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas

        if (mouse.prevX == mouse.x && mouse.prevY == mouse.y) mouse.counter++

        for (let i = 0; i < fireflies.length; i++) {
            fireflies[i].fly()

            if (fireflies[i].x < 0 - fireflies[i].radius || fireflies[i].x > canvas.width + fireflies[i].radius || fireflies[i].y < 0 - fireflies[i].radius || fireflies[i].y > canvas.height + fireflies[i].radius) {
                fireflies[i].x = rng(fireflies[i].radius, canvas.width - fireflies[i].radius)
                fireflies[i].y = rng(fireflies[i].radius, canvas.height - fireflies[i].radius)
            }
        }

        mouse.prevX = mouse.x
        mouse.prevY = mouse.y
    }

    const resizeEH = _ => {
        const rect = canvas.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1

        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr

        c.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const mouseEH = _ => {
        mouse.x = event.clientX
        mouse.y = event.clientY
        mouse.counter = 0
    }

    class Fireflies {
        static initialize(quantity = Math.floor((window.innerHeight + window.innerWidth) / 150), radius = [5, 25 + Math.floor((window.innerHeight + window.innerWidth) / 100)], color = [{
            fill: '#ffffea',
            glow: '#ff881b'
        }], collision = true, pulse = true, flicker = true, connect = false) {
            this.terminate() // Terminates all previously initialized instances
            canvas = document.getElementById('sparks') // Get canvas element from document
            c = canvas.getContext('2d') // Get context to access 2D canvas functions
            const rect = canvas.getBoundingClientRect()

            canvas.width = rect.width
            canvas.height = rect.height
            /*
            canvas.width = window.innerWidth // Set canvas' width to full width of the window
            canvas.height = window.innerHeight // Set canvas' height to full height of the window
            */
            c.globalCompositeOperation = 'screen'
            for (let i = 0; i < quantity; i++) {
                let r
                if (Object.prototype.toString.call(radius) === '[object Array]') {
                    r = rng(radius[0], radius[1])
                    maxRadius = 1.5 * radius[1]
                } else {
                    r = radius
                    maxRadius = 1.5 * radius
                }
                const x = rng(r, canvas.width - r)
                const y = rng(r, canvas.height - r)
                const randomColor = rcg(color)
                fireflies[i] = new Firefly(x, y, r, randomColor, collision, pulse, flicker, connect)
            }
            addEventListener('resize', resizeEH)
            addEventListener('mousemove', mouseEH)
            animationLoop()
        }
        static terminate() {
            cancelAnimationFrame(animationID)
            removeEventListener('resize', resizeEH)
            removeEventListener('mousemove', mouseEH)
            for (let i = 0; i < fireflies.length; i++) {
                fireflies.splice(0, fireflies.length)
            }
            if (canvas) {
                canvas.remove()
            }
        }
    }
    class Firefly {
        constructor(x, y, radius, color, collision, pulse, flicker, connect) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = {
                fill: color.fill,
                glow: color.glow
            }
            this.velocity = {
                x: Math.random() * Math.PI,
                y: Math.random() * Math.PI
            }
            this.glow = {
                pulse: pulse,
                flicker: flicker,
                default: undefined,
                strength: pulse ? rng(16, 255) : 191,
                growing: true
            }
            this.collision = collision
            this.connect = connect
        }
        draw() {
            c.beginPath()
            c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
            const gradient = c.createRadialGradient(this.x, this.y, this.radius / 10, this.x, this.y, this.radius)
            gradient.addColorStop(1, this.color.glow + '00')
            gradient.addColorStop(0.1, this.color.glow + this.glow.strength.toString(16))
            gradient.addColorStop(0, this.color.fill)
            c.fillStyle = gradient
            c.fill()
            c.closePath()
        }
        fly() {
            this.collide()
            this.stayWithinView() // Screenbound
            this.x += 0.75 * Math.cos(this.velocity.x) // The number is the speed modifier
            this.y += 0.75 * Math.sin(this.velocity.y) // The number is the speed modifier
            this.calcGlow()
            // this.leaveTrail()
            this.draw()
        }
        stayWithinView() {
            // particle.position.x = Math.max( Math.min( particle.position.x, SCREEN_WIDTH ), 0 )
            // particle.position.y = Math.max( Math.min( particle.position.y, SCREEN_HEIGHT ), 0 )

            if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
                this.velocity.x -= 0.07
            } else {
                this.velocity.x += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180 // Math.random() * 0.34 - 0.17 for short
            }
            if (this.y + this.radius + 100 >= canvas.height || this.y - this.radius <= 0) {
                this.velocity.y -= 0.07
            } else {
                this.velocity.y += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180 // Math.random() * 0.34 - 0.17 for short
            }

        }
        collide() {
            if (this.collision) {
                this.calcField()
                const thisIndex = fireflies.indexOf(this)
                for (let i = 0; i < fireflies.length; i++) {
                    if (fireflies[i] != fireflies[thisIndex]) {
                        const dist = distance(this.x, this.y, fireflies[i].x, fireflies[i].y)
                        const radii = this.radius + fireflies[i].radius
                        if (dist <= radii) {
                            this.velocity.x -= 0.035
                            this.velocity.y -= 0.035
                            if (this.connect) {
                                c.save()
                                c.beginPath()
                                c.moveTo(this.x, this.y)
                                c.lineTo(fireflies[i].x, fireflies[i].y)
                                c.strokeStyle = `#ffffff${(Math.floor(255 - (238 * dist / radii))).toString(16)}`
                                c.stroke()
                                c.closePath()
                                c.restore()
                            }
                        }
                    }
                }
            }
        }
        calcField() {
            if (!mouse.isMoving()) return

            const k = 8 // Max velocity constant

            let deltaX = this.x - mouse.x // Horizontal distance between firefly and mouse
            let deltaY = this.y - mouse.y // Vertical distance between firefly and mouse

            let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) // Distance between firefly and mouse
            let angle = Math.atan(Math.abs(deltaY) / Math.abs(deltaX)) // Angle of firefly with respect to mouse

            if (distance > 7 * maxRadius) return

            let velocity = k / Math.pow(distance / (maxRadius), 1.5) // Velocity is modelled after electric field (inaccurate more conversions needed for true velocity)
            if (distance < this.radius) velocity = k // Sets limit on field strength, this is in case mouse is within the radius

            let vx = velocity * Math.cos(angle) * (deltaX / Math.abs(deltaX)) // Horizontal component of v is cos of angle times net velocity as well as the direction
            let vy = velocity * Math.sin(angle) * (deltaY / Math.abs(deltaY)) // Vertical component of v is sin of angle times net velocity as well as the direction

            if (Number.isFinite(vx)) this.x += vx //Arctan function causes some NaN numbers for fireflies, ignore these
            if (Number.isFinite(vy)) this.y += vy
        }
        calcGlow() {
            if (this.glow.default === undefined) {
                this.glow.default = this.glow.strength
            }
            if (this.glow.pulse) {
                if (this.glow.default >= 255) {
                    this.glow.growing = false
                } else if (this.glow.default <= 48) {
                    this.glow.growing = true
                }
                if (this.glow.growing) {
                    this.glow.default++
                    this.glow.strength = this.glow.default
                } else {
                    this.glow.default--
                    this.glow.strength = this.glow.default
                }
            }
            if (this.glow.flicker) {
                if (Math.random() > 0.99) {
                    this.glow.strength = rng(16, 255)
                } else {
                    this.glow.strength = this.glow.default
                }
            }
        }
    }
    Fireflies.initialize()

    

    //Counter

    const animateCountUp = el => {
        if (el._countTween) {
            el._countTween.kill();
        }

        const countTo = parseInt(el.dataset.countTo || el.textContent, 10);
        const counterValue = { value: 0 };

        el.textContent = '0';

        el._countTween = gsap.to(counterValue, {
            value: countTo,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
                el.textContent = Math.round(counterValue.value);
            },
            onComplete: () => {
                el.textContent = countTo;
                el._countTween = null;
            }
        });
    };

    document.querySelectorAll('.stat').forEach(el => {
        el.dataset.countTo = parseInt(el.textContent, 10);
        el.textContent = '0';

        ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            // markers: true,
            onEnter: () => animateCountUp(el),
            onEnterBack: () => animateCountUp(el),
            onLeave: () => {
                if (el._countTween) {
                    el._countTween.kill();
                    el._countTween = null;
                }
                el.textContent = '0';
            },
            onLeaveBack: () => {
                if (el._countTween) {
                    el._countTween.kill();
                    el._countTween = null;
                }
                el.textContent = '0';
            },
        });
    });

    

});


