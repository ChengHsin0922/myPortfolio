document.addEventListener('DOMContentLoaded', (event) => {
    console.log('ok');
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#rock1', {
        scrollTrigger: {
            trigger: '#rock1',
            start: '20% bottom',
            end: 'bottom bottom',
            scrub: 1,
        },
        x: 100,
        duration: 3,
        ease: 'back.inOut(2.5)'
    });
    gsap.to('#rock2', {
        scrollTrigger: {
            trigger: '#rock2',
            start: '80% bottom',
            end: 'bottom bottom',
            scrub: 1,
        },
        x: -280,
        duration: 3,
        ease: 'sine.inOut'
    });
    gsap.to('#rock', {
        scrollTrigger: {
            trigger: '#rock',
            start: 'top bottom',
            end: '40% bottom',
            scrub: 1,
        },
        y: -60,
        duration: 3,
        ease: 'sine.inOut'
    });
})
window.onload = function() {
    let title = document.getElementById('title');
    let forest2 = document.getElementById('forest2');
    let forest3 = document.getElementById('forest3');
    let bird = document.getElementById('bird');
    const cursor = document.querySelector('.custom-cursor');
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        title.style.top = 200+value*0.8+'px';
        forest2.style.left = value*0.5+'px';
        forest3.style.bottom = -200+value*-0.5+'px';
        bird.style.left = 300-value*0.5+'px';
    });
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX-24}px, ${e.clientY-20}px)`;
    });
};