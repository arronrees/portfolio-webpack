import '../../styles/reset.scss';
import '../../styles/style.scss';
import '../../styles/home.scss';

import { homeEnter } from '../animations/homeEnter';
import { animateCursor } from '../other/cursor';
import { cubeRotate } from '../other/cubeRotate';

homeEnter(document.querySelector('.wrapper'));
animateCursor();
cubeRotate();
