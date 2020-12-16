import gsap from 'gsap';

export function animationLeave(container) {
  const pageCards = document.querySelectorAll('.page-card');

  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: 'power1.inOut',
    },
  });

  tl.to(container, { opacity: 0 }).fromTo(
    pageCards,
    { x: '100%' },
    { x: '-101%', stagger: 0.1 },
    0
  );

  return tl;
}
