import imagesLoaded from 'imagesloaded';

// Ensure the page is scrolled to the top before any animations or loaders
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Function to get the last visit time from localStorage
function getLastVisitTime() {
    return localStorage.getItem('lastVisitTime');
}

// Function to set the last visit time in localStorage
function setLastVisitTime() {
    const currentTime = new Date().getTime();
    localStorage.setItem('lastVisitTime', currentTime);
}

// Check if the visit is within the last 10 minutes
function isVisitWithinLast10Minutes() {
    const lastVisitTime = getLastVisitTime();
    const currentTime = new Date().getTime();

    if (!lastVisitTime) {
        // No last visit time found, this is the first visit
        return false;
    }

    const tenMinutesInMilliseconds = 10 * 60 * 1000;
    return currentTime - lastVisitTime <= tenMinutesInMilliseconds;
}

// Wait for the DOM to fully load before applying any changes
document.addEventListener('DOMContentLoaded', () => {
    const isRecentVisit = isVisitWithinLast10Minutes();

    if (isRecentVisit) {
        // Set the initial state of the .blinder to scale(0) if the visit is within the last 10 minutes
        gsap.set('.blinder', {scaleY: 0});
        gsap.set('.loader', {scaleY: 0});
        return;
    }

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
                // Set the last visit time after the animation completes
                setLastVisitTime();
            }
        });

        // TEXT SPLIT
        const logo = document.querySelector('.logo');
        const letters = logo.textContent.split('');
        logo.textContent = '';

        letters.forEach((letter) => {
            logo.innerHTML += `<span class="letter">${letter}</span>`; // Corrected string template
        });

        gsap.set('.letter', {display: 'inline-block'});

        tl.fromTo('.letter', {y: '0'}, {y: '200%', stagger: 0.1, ease: 'power1.inOut', duration: 1, delay: 0.4});
        tl.to('.blinder', {scaleY: 0, stagger: 0.3, ease: 'power3.out'}, '<45%');
        tl.to('.loader', {scaleY: 0});

        gsap.set('.text1 span', {display: "inline-block"});
        gsap.set('.text2 span', {display: "inline-block"});
        gsap.set('.text3 span', {display: "inline-block"});
        gsap.set('.text4 span', {display: "inline-block"});
        gsap.set('.work_title-wrap', {opacity: 0});

        tl.fromTo('.text1 span', {y: "100%"}, {y: "0", ease: "power1.out", duration: 1}, '<50%');
        tl.fromTo('.text2 span', {y: "-100%"}, {y: "0", ease: "power1.out", duration: 1}, '<50%');
        tl.fromTo('.text3 span', {x: "100%"}, {x: "0", ease: "power1.out", duration: 1}, '<50%');
        tl.fromTo('.text4 span', {y: "120%"}, {y: "0", ease: "power1.out", duration: 1}, '<50%');
        tl.fromTo('.work_title-wrap', {opacity: 0}, {opacity: 1}, '<50%');
        tl.fromTo('.work_image', {opacity: 1, duration: 2, ease: "power1.out"}); // Corrected missing selector dot for .work_image

        // Error Handling for Images Loading Failure
        imgLoad.on('fail', function(instance) {
            console.log('Some images failed to load.');
            // Implement any fallback logic here, such as removing the loader immediately
            gsap.set('.loader', {scaleY: 0}); // Fallback to remove loader
        });
    });
});
