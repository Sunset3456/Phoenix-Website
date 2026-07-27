import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
    const timelineSection = document.querySelector('.timeline-section');
    const circle = document.querySelector('#tl-circle, #timeline-circle');
    const lineBar = document.querySelector('.tl-line');

    if (!timelineSection || !circle) return;

    // 1. Pin the circle node at the center of the viewport (50vh) when scrolling through the timeline section
    ScrollTrigger.create({
        trigger: timelineSection,
        start: 'top 50%',
        end: 'bottom 50%',
        pin: circle,
        pinSpacing: false,
    });

    // 2. Fade in both the circle and central line as the timeline section scrolls into view

        gsap.to(circle, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: timelineSection,
                start: 'top 50%',
                end: 'bottom 20%',
                // markers: true,
                toggleActions: 'play reverse play reverse',
            }
        });

    if (lineBar) {
        gsap.to(lineBar, {
            autoAlpha: 1,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: timelineSection,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
            }
        });

        // 3. Line grows downward as user scrolls (circle leads the tip at screen center)
        gsap.fromTo(lineBar,
            { scaleY: 0 },
            {
                scaleY: 1,

                ease: 'none',
                scrollTrigger: {
                    trigger: timelineSection,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    scrub: true,
                }
            }
        );
    }

    // 4. Cards scroll up and appear in numerical order (Right: Card 1 & 3, Left: Card 2 & 4)
    const cards = [
        { wrapperId: '#card-one-wrap', cardId: '#card-one', side: 'right' },
        { wrapperId: '#card-two-wrap', cardId: '#card-two', side: 'left' },
        { wrapperId: '#card-three-wrap', cardId: '#card-three', side: 'right' },
        { wrapperId: '#card-four-wrap', cardId: '#card-four', side: 'left' },
    ];

    cards.forEach((cardObj) => {
        const wrapperElem = document.querySelector(cardObj.wrapperId);
        const cardElem = document.querySelector(cardObj.cardId);

        if (!wrapperElem || !cardElem) return;

        const isRight = cardObj.side === 'right';
        const startX = isRight ? 40 : -40;

        gsap.fromTo(cardElem,
            {
                y: 120,
                x: startX,
                autoAlpha: 0,
                scale: 0.92,
            },
            {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 0.8,
                ease: 'sine.inOut',
                scrollTrigger: {
                    trigger: wrapperElem,
                    start: 'top 80%',
                    end: 'top 40%',
                    // markers: true,
                    toggleActions: 'play none none reverse',
                }
            }
        );
    });
});
