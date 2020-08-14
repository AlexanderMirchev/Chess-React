import React from 'react'
import Board from "./components/Board"
import initBoard from "./helper-functions/InitBoard"

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: initBoard(),
            pieceSelected: null,
        }
    }

    handleClick(i, j) {
        const squares = this.state.squares.slice();
        if (this.state.pieceSelected === null ||
            squares[i][j] != null && squares[i][j].color === this.state.pieceSelected.piece.color) {

            this.state.pieceSelected = {
                row: i,
                col: j,
                piece: squares[i][j],
            }

        }
        else {
            squares[i][j] = this.state.pieceSelected.piece;
            delete squares[this.state.pieceSelected.row][this.state.pieceSelected.col];

            this.setState({
                squares: squares,
                pieceSelected: null
            });

        }
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        onClick={(i, j) => this.handleClick(i, j)}
                    />

                </div>

            </div>
        );
    }
}