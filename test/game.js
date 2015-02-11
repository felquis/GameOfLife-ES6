'use strict';

import Game from '../src/game';
import Cell from '../src/cell';
import assert from 'assert';

describe('Game', () => {

    it('Should step', () => {
        let game = new Game(3, 3);

        game.board.cells.map((cell, index) => cell.alive = !![1, 4, 7].includes(index));

        game.step();

        let alive = [];
        game.board.cells.forEach((cell, index) => {
            if (cell.alive) {
                alive.push(index);
            }
        });

        assert.deepEqual([3, 4, 5], alive);
    });

});