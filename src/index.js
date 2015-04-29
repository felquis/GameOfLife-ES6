'use strict';

import Poly from 'babel/polyfill';
import Game from './game';

window.game = new Game(40, 20);

console.log(game.render());
game.step();
