import King from "../pieces/King"
import Queen from "../pieces/Queen"
import Pawn from "../pieces/Pawn"
import Rook from "../pieces/Rook"
import Knight from "../pieces/Knight"
import Bishop from "../pieces/Bishop"

export default function initBoard() {
    const squares = new Array(8).fill(null).map(
        () => new Array(8).fill(null));

    for (let index = 0; index < 8; index++) {
        squares[1][index] = new Pawn(2);
        squares[6][index] = new Pawn(1);
    }
    squares[0][4] = new King(2);
    squares[7][4] = new King(1);
    squares[0][3] = new Queen(2);
    squares[7][3] = new Queen(1);

    squares[0][0] = new Rook(2);
    squares[7][0] = new Rook(1);
    squares[0][7] = new Rook(2);
    squares[7][7] = new Rook(1);

    squares[0][1] = new Knight(2);
    squares[7][1] = new Knight(1);
    squares[0][6] = new Knight(2);
    squares[7][6] = new Knight(1);

    squares[0][2] = new Bishop(2);
    squares[7][2] = new Bishop(1);
    squares[0][5] = new Bishop(2);
    squares[7][5] = new Bishop(1);

    return squares;
}
