import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initTimeline() {
    const timelineSection = document.querySelector('.timeline-section');
    const circle = document.querySelector('#tl-circle, #timeline-circle');
    const lineBar = document.querySelector('.tl-line');

    if (!timelineSection || !circle) return;

    // Prevent mobile resize jumps
    ScrollTrigger.config({ ignoreMobileResize: true });

    // 1. Pin circle at 50vh (viewport center) during timeline scroll
    ScrollTrigger.create({
        trigger: timelineSection,
        start: 'top 50%',
        end: 'bottom 50%',
        pin: circle,
        pinSpacing: false,
        invalidateOnRefresh: true,
        // markers: true
    });

    if (circle){

        gsap.to(circle, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: timelineSection,
            start: 'top 50%',
            end: '90% 50%',
            toggleActions: 'play reverse play reverse',
            invalidateOnRefresh: true,
        }
        });

        // gsap.fromTo(circle,
        //     { autoAlpha: 1 },
        //     {
        //         autoAlpha: 0,
        //         // ease: 'none',
        //         scrollTrigger: {
        //             trigger: timelineSection,
        //             start: 'top 50%',
        //             end: 'bottom 50%',
        //             scrub: true,
        //             invalidateOnRefresh: true,
        //         }
        //     }
        // );
    }
    
    if (lineBar) {
        gsap.to(lineBar, {
            autoAlpha: 1,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: timelineSection,
                start: 'top 80%',
                end: '90% 50%',
                toggleActions: 'play reverse play reverse',
            }
        });

        gsap.fromTo(lineBar,
            { 
                scaleY: 0,
                autoAlpha: 1,
            },
            {
                scaleY: 1,
                // autoAlpha: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: timelineSection,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    scrub: true,
                    invalidateOnRefresh: true,
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
            { y: 120, x: startX, autoAlpha: 0, scale: 0.92 },
            {
                y: 0,
                x: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: wrapperElem,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none play reverse',
                    invalidateOnRefresh: true,
                }
            }
        );
    });

    // 5. Force ScrollTrigger refresh when images load / window loads to fix stale layout measurements
    const timelineImgs = timelineSection.querySelectorAll('img');
    timelineImgs.forEach((img) => {
        if (img.complete) return;
        img.addEventListener('load', () => ScrollTrigger.refresh());
        img.addEventListener('error', () => setTimeout(() => ScrollTrigger.refresh(), 100));
    });

    // Delayed refreshes for dynamic/fallback content
    setTimeout(() => ScrollTrigger.refresh(), 300);
    setTimeout(() => ScrollTrigger.refresh(), 1000);
    setTimeout(() => ScrollTrigger.refresh(), 2500);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initTimeline);
} else {
    initTimeline();
}

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});