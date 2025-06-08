gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const rocket = document.querySelector(".rocket");
const container = document.querySelector(".animation");

gsap.to( rocket,{
    duration: .5,
    ease: "ease-in-out",
    motionPath: {
        path:[
            { x: 0, y: 0 },
            { x: container.clientWidth, y:-400 }
        ],
        autoRotate: false
    },
    scrollTrigger:{
        trigger: ".animation",
        start: "top center",
        end: "center top",
        scrub: true,
        markers: true
    }
});

/Users/yushiuan/Library/Mobile Documents/com~apple~CloudDocs/GSAP/js/animation.js
