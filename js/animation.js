gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const rocket = document.querySelector(".rocket");
const container = document.querySelector(".animation");

gsap.to( rocket,{
    duration: .5,
    ease: "ease-in-out",
    motionPath: {
        path:[
            { x: 0, y: 0 },
            { x: container.clientWidth, y:-600 }
        ],
        autoRotate: false
    },
    scrollTrigger:{
        trigger: ".animation",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});

const headerPic = document.querySelector('.header_pic');

const stars = [
  { top: '10%', left: '20%', rotate: 15 },
  { top: '30%', left: '40%', rotate: 45 },
  { top: '60%', left: '10%', rotate: -20 },
  { top: '80%', left: '70%', rotate: 60 },
];

stars.forEach(function(star, index) {
  const img = document.createElement('img');
  img.src = './img/star.svg';
  img.className = 'star';
  img.style.top = star.top;
  img.style.left = star.left;
  img.style.transform = 'rotate(' + star.rotate + 'deg)';//星星沒有旋轉
  img.style.height = '40px';
  img.style.position = 'absolute';
  headerPic.appendChild(img);
});

gsap.to( stars, {
  y: -200,   // 沒有往上移
  ease: 'ease-in-out',
  scrollTrigger: {
    trigger: '.animation',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});
