import gsap from 'gsap';

export function animationEnter(container) {
  const pageCards = document.querySelectorAll('.page-card');
  const hero = container.querySelector('.hero');
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
    .from(hero, { y: -25, opacity: 0 }, 0)
    .from(navLinks[0], { x: -25, opacity: 0 }, 1.5)
    .from([navLinks[1], navLinks[2]], { x: 25, opacity: 0 }, 1.5);

  return tl;
}
