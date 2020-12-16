import gsap from 'gsap';

export function projectSlider() {
  if (window.innerWidth > 900) {
    gsap.set('.cards', { autoAlpha: 1 });
    gsap.set('.card', { x: '-100%', autoAlpha: 0 });

    let currentStep = 0;
    const totalSlides = document.querySelectorAll('.card').length;
    const wrapper = gsap.utils.wrap(0, totalSlides);

    createTimelineIn('next', currentStep);

    function createTimelineIn(direction, index) {
      const goPrev = direction === 'prev';

      const element = document.querySelector('div.card' + index);

      const tlIn = gsap.timeline({
        defaults: {
          modifiers: {
            x: gsap.utils.unitize((x) => {
              return goPrev ? Math.abs(x) : x;
            }),
          },
        },
      });
      tlIn.fromTo(
        element,
        {
          autoAlpha: 0,
          x: '-100%',
        },
        {
          duration: 0.7,
          ease: 'Power1.inOut',
          x: 0,
          autoAlpha: 1,
        }
      );

      return tlIn;
    }

    function createTimelineOut(direction, index) {
      const goPrev = direction === 'prev';

      const element = document.querySelector('div.card' + index);

      const tlOut = gsap.timeline();
      tlOut.to(element, {
        duration: 0.7,
        x: 250,
        autoAlpha: 0,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            return goPrev ? -x : x;
          }),
        },
        ease: 'back.in(2)',
      });

      return tlOut;
    }

    function updateCurrentStep(goToIndex) {
      currentStep = goToIndex;
    }

    function transition(direction, toIndex) {
      const tlTransition = gsap.timeline({
        onStart: () => {
          updateCurrentStep(toIndex);
        },
      });

      const tlOut = createTimelineOut(direction, currentStep);
      const tlIn = createTimelineIn(direction, toIndex);

      tlTransition.add(tlOut).add(tlIn);

      return tlTransition;
    }

    function isTweening() {
      return gsap.isTweening('.card');
    }

    document.querySelector('div.next').addEventListener('click', (e) => {
      e.preventDefault();

      const nextStep = wrapper(currentStep + 1);

      !isTweening() && transition('next', nextStep);
    });

    document.querySelector('div.prev').addEventListener('click', (e) => {
      e.preventDefault();

      const prevStep = wrapper(currentStep - 1);

      !isTweening() && transition('prev', prevStep);
    });
  } else {
    return;
  }
}
