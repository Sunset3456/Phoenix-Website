//Parallax effect on decode.html
const cards = [
    { id: "#card-one", endTranslateX: -100, rotate: 2 },
    { id: "#card-two", endTranslateX: -200, rotate: -4 },
    { id: "#card-three", endTranslateX: -300, rotate: -3 },
    { id: "#card-four", endTranslateX: -400, rotate: 3 },
];

ScrollTrigger.create({
    trigger: ".parallax-section",
    start: 'top top',
    end: "+=1000vh",
    scrub: 1,
    pin: true,
    // pinSpacing: true,
    // anticipatePin: 1,
    onUpdate: (self => {
        gsap.to('.img-cont', {
            // x: `${-350 * self.progress}vw`,
            x: -350 * self.progress,
            duration: 2,
            ease: 'power3.out'
        })
    })
});

cards.forEach(card => {
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