'use strict';

import Game  from './src/game';

let game = new Game(40, 20);

setInterval(() => {
    process.stdout.write("\u001b[2J\u001b[0;0H");
    process.stdout.write(game.render());
    game.step();
}, 100);