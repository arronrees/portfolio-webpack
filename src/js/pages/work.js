import '../../styles/reset.scss';
import '../../styles/style.scss';
import '../../styles/work.scss';

import { animationEnter } from '../animations/animationEnter';
import { animateCursor } from '../other/cursor';
import { openCard } from '../other/openCard';
import { projectSlider } from '../other/projectSlider';

animationEnter(document.querySelector('.wrapper'));
animateCursor();
openCard();
projectSlider();
