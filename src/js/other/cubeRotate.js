export function cubeRotate() {
  const box = document.querySelector('.cube');
  const face = document.querySelectorAll('.face');

  document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    const midX = x - window.innerWidth;
    const midY = y - window.innerHeight;

    box.style.transform = `rotateX(${midY * 0.2}deg) rotateY(${midX * 0.2}deg)`;
  });
}
