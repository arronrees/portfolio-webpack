import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import barbaRouter from '@barba/router';

import '../styles/reset.scss';
import '../styles/style.scss';
import '../styles/home.scss';
import '../styles/work.scss';
import '../styles/about.scss';
import '../styles/contact.scss';

import { homeEnter } from './animations/homeEnter';
import { animationEnter } from './animations/animationEnter';
import { animationLeave } from './animations/animationLeave';

import { animateCursor } from './other/cursor';
import { cubeRotate } from './other/cubeRotate';
import { openCard } from './other/openCard';
import { projectSlider } from './other/projectSlider';

const myRouter = [
  { name: 'home', path: './index.html' },
  { name: 'architecture', path: './architecture.html' },
  { name: 'detail', path: './detail-page.html' },
];

barba.use(barbaRouter, {
  routes: myRouter,
});

barba.use(barbaPrefetch);

barba.init({
  transitions: [
    {
      name: 'home',
      to: {
        namespace: ['home'],
      },
      once({ next }) {
        animateCursor(next.container);
        cubeRotate(next.container);
        homeEnter(next.container);
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animateCursor(next.container);
        cubeRotate(next.container);
        homeEnter(next.container);
      },
    },
    {
      name: 'work',
      to: {
        namespace: ['work'],
      },
      once({ next }) {
        animateCursor(next.container);
        openCard(next.container);
        projectSlider(next.container);
        animationEnter(next.container);
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        projectSlider(next.container);
        animateCursor(next.container);
        openCard(next.container);
        animationEnter(next.container);
      },
    },
    {
      name: 'general-transition',
      once({ next }) {
        animateCursor(next.container);
        animationEnter(next.container);
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animateCursor(next.container);
        animationEnter(next.container);
      },
    },
  ],
});
