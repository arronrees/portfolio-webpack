import '../../styles/reset.scss';
import '../../styles/style.scss';
import '../../styles/contact.scss';

import { animationEnter } from '../animations/animationEnter';
import { animateCursor } from '../other/cursor';

animationEnter(document.querySelector('.wrapper'));
animateCursor();
