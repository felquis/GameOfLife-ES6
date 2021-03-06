'use strict';

import Board from './board';
import chunk from 'chunk';

class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.board = new Board(width, height);
    }

    step() {
        let oldCells = this.board.cells.map(cell => Object.assign({}, cell));

        this.board.cells = oldCells.map(cell => {
            let neighbours = this.board.getNeighbours(cell);

            let alive = neighbours.filter(neighbour => neighbour.alive);

            if (cell.alive) {
                if (alive.length < 2 || alive.length > 3) {
                    cell.alive = false;
                }
            } else {
                if (alive.length === 3) {
                    cell.alive = true;
                }
            }

            return cell;
        });
    }

    render(aliveChar = '#', deadChar = '_', newLineChar = '\n') {
        let chunks = chunk(this.board.cells, this.width);
        return chunks.map(row => row.map(cell => cell.alive ? aliveChar : deadChar).join('')).join(newLineChar);
    }
}

export default Game;
