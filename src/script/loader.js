import imagesLoaded from 'imagesloaded';

// Ensure the page is scrolled to the top before any animations or loaders
window.scrollTo(0, 0);

// Wait for the DOM to fully load before applying any changes
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('body');

    // Apply imagesLoaded on all images in the body
    const imgLoad = imagesLoaded(content);

    imgLoad.on('done', instance => {
        // Block scrolling while animating
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({
            defaults: {},
            onComplete: () => {
                // Allow scrolling after the animation finished
                document.body.style.overflow = '';
            }
        });

        // TEXT SPLIT
        const logo = document.querySelector('.logo');

        const letters = logo.textContent.split('');
        logo.textContent = '';
        letters.forEach((letter) => {
            logo.innerHTML += `<span class="letter">${letter}</span>`;
        });

        gsap.set('.letter', { display: 'inline-block' });

        tl.fromTo('.letter', { y: '0' }, { y: '200%', stagger: 0.1, ease: 'power1.inOut', duration: 1, delay: 0.4 });
        tl.to('.blinder', { scaleY: 0, stagger: 0.3, ease: 'power3.out' }, '<45%');
        tl.to('.loader', { scaleY: 0 });

        gsap.set('.text1 span', { display: "inline-block" });
        gsap.set('.text2 span', { display: "inline-block" });
        gsap.set('.text3 span', { display: "inline-block" });
        gsap.set('.text4 span', { display: "inline-block" });
        gsap.set('.work_title-wrap', { opacity: 0 });
        tl.fromTo('.text1    span', { y: "100%" }, { y: "0", ease: "power1.out" }, '<50%');
        tl.fromTo('.text2   span', { y: "-100%" }, { y: "0", ease: "power1.out" }, '<50%');
        tl.fromTo('.text3   span', { x: "100%" }, { x: "0", ease: "power1.out" }, '<50%');
        tl.fromTo('.text4   span', { y: "120%" }, { y: "0", ease: "power1.out" }, '<50%');
        tl.fromTo('.work_title-wrap', { opacity: 0 }, { opacity: 1 }, '<50%')
        // tl.fromTo('.main-header', { opacity: 0, y: "100%" }, { duration: 0.8, ease: 'easeinOut', opacity: 1, y: "0%" });

        // gsap.set('.work_item', { y: 200, opacity: 0 });
        // tl.fromTo('.work_item', { y: 500, opacity: 0 }, { y: 0, stagger: 0.05, duration: 1, ease: "power1.out", opacity: 1 });
        // let workItems = document.querySelectorAll('.work_item');

        // tl.add(gsap.delayedCall(0, function() {
        //     workItems.forEach(workItem => {
        //         workItem.classList.add('astroGrow');
        //     });
        // }));


    });
});