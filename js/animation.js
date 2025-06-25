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

// const stars = document.querySelectorAll('.star');
const headerPic = document.querySelector('.header_pic');

// stars = [
//   { top: '10%', left: '20%', rotate: 15 },
//   { top: '30%', left: '40%', rotate: 45 },
//   { top: '60%', left: '10%', rotate: -20 },
//   { top: '80%', left: '70%', rotate: 60 },
// ];

// stars.forEach(function(star, index) {
//   const img = document.createElement('img');
//   img.src = './img/star.svg';
//   img.className = 'star';
//   img.style.top = star.top;
//   img.style.left = star.left;
//   img.style.transform = 'rotate(' + star.rotate + 'deg)';//星星沒有rotate
//   img.style.height = '40px';
//   img.style.position = 'absolute';
//   headerPic.appendChild(img);
// });

// gsap.to( stars, {
//   y: -200,   // why沒有往上移 
//   ease: 'ease-in-out',
//   scrollTrigger: {
//     trigger: '.animation',
//     start: 'top bottom',
//     end: 'bottom top',
//     onUpdate: () => {
//     console.log("✨ 動畫更新中");
//     }
//     // scrub: true
//   }
// });

// ⭐ 這是位置資料 → 命名改為 starPositions，避免覆蓋掉 DOM 變數
const starPositions = [
  { top: '10%', left: '20%', rotate: 15 },
  { top: '30%', left: '40%', rotate: 45 },
  { top: '60%', left: '10%', rotate: -20 },
  { top: '80%', left: '70%', rotate: 60 },
];

// ⭐ 動態產生星星
starPositions.forEach((star) => {
  const img = document.createElement('img');
  img.src = './img/star.svg';
  img.className = 'star';
  img.style.top = star.top;
  img.style.left = star.left;
  img.style.transform = `rotate(${star.rotate}deg)`;
  img.style.height = '40px';
  img.style.position = 'absolute';
  headerPic.appendChild(img);
});

const stars = document.querySelectorAll('.star');

gsap.registerPlugin(ScrollTrigger);

gsap.to(stars, {
  y: -200,
  ease: 'easeInOut',
  scrollTrigger: {
    trigger: '.animation',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    markers: true,
    onUpdate: () => {
      console.log("✨ 動畫更新中");
    }
  }
});


gsap.to('.cloud', {
  y: -500,
  ease: 'sine.inOut',
  scrollTrigger: {
    trigger: '.haeder-layout',
    start: 'top top', 
    end: 'bottom 50px', 
    scrub: true
  }
});

gsap.fromTo('.animation',
  {
    y: 200,
  },
  {
    y: -300,
    ease: 'sine.inOut',
    scrollTrigger: {
      trigger: '.haeder-layout',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  }
);