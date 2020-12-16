import homeStyle from './pages/home';
import * as home from './animations/homeEnter';
import * as cursor from './other/cursor';

home.homeEnter(document.querySelector('.wrapper'));
cursor.animateCursor();
