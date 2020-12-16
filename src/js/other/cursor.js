export function animateCursor() {
  const mouse = document.querySelector('.cursor');

  let mouseX = 0;
  let mouseY = 0;

  let ballX = 0;
  let ballY = 0;

  let speed = 0.1;

  function animate() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    ballX = ballX + distX * speed;
    ballY = ballY + distY * speed;

    mouse.style.left = `${ballX}px`;
    mouse.style.top = `${ballY}px`;

    requestAnimationFrame(animate);
  }

  animate();

  function cursorFollow(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }

  function activeCursor(e) {
    const item = e.target;
    if (item.classList.contains('lg-cursor')) {
      mouse.classList.add('large-cursor');
    } else if (item.classList.contains('sm-cursor')) {
      mouse.classList.add('small-cursor');
    } else {
      mouse.classList.remove('large-cursor');
      mouse.classList.remove('small-cursor');
    }
  }

  function sprayCursor(e) {
    if (e.target.classList.contains('lg-cursor')) {
      return;
    } else {
      mouse.classList.add('click-spray');
      setTimeout(() => {
        mouse.classList.remove('click-spray');
      }, 300);
    }
  }

  document.addEventListener('click', sprayCursor);

  document.addEventListener('mousemove', cursorFollow);
  document.addEventListener('mouseover', activeCursor);
}
