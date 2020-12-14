import '../styles/reset.scss';
import '../styles/style.scss';
import '../styles/home.scss';
import gsap from 'gsap';

export function homeEnter(container) {
  const pageCards = document.querySelectorAll('.page-card');
  const box = container.querySelector('.cube');
  const face = container.querySelectorAll('.face');
  const hero = container.querySelector('.home-hero');
  const navLinks = container.querySelectorAll('.nav-item');

  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
    },
  });

  tl.fromTo(
    pageCards,
    { x: '-101%' },
    { x: '100%', duration: 0.5, stagger: 0.1 },
    0.2
  )
    .to(container, { opacity: 1 })
    .from(face, { duration: 1, opacity: 0 })
    .to(box, { duration: 3, rotateX: 450, rotateY: 450 }, '-=1.5')
    .to(face, { duration: 1.5, height: 290, width: 290 }, '-=1.5')
    .from(hero, { y: -25, opacity: 0 }, '-=1')
    .from(navLinks[0], { x: -25, opacity: 0 }, '-=0.5')
    .from([navLinks[1], navLinks[2]], { x: 25, opacity: 0 }, '-=1');

  return tl;
}
