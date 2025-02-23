document.addEventListener('DOMContentLoaded', (event) => {
    console.log('ok');
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#rock', {
        scrollTrigger: {
            trigger: '#rock',
            start: 'top bottom',
            end: '40% bottom',
            scrub: 1,
        },
        y: -60,
        duration: 2,
        ease: 'sine.inOut'
    });
})
window.onload = function() {
    let title = document.getElementById('title');
    let forest1 = document.getElementById('forest1');
    let forest2 = document.getElementById('forest2');
    let forest3 = document.getElementById('forest3');
    let bird = document.getElementById('bird');
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        title.style.top = 200+value*0.8+'px';
        forest1.style.bottom = -150-value*0.2+'px';
        forest2.style.left = value*0.5+'px';
        forest3.style.bottom = -150+value*-0.5+'px';
        bird.style.left = 300-value*0.5+'px';
    });
    document.querySelectorAll('.fillterButton').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-fillter');
            document.querySelectorAll('.card').forEach(card => {
                if(category == 'all' || card.getAttribute('data-category') == category) {
                    card.style.display = 'block';
                }else {
                    card.style.display = 'none';
                }
            });
        });
    });
};