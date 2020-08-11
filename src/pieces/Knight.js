import Piece from "./Piece"

export default class Knight extends Piece {
    constructor(color) {
        super(color, (color == 1 ?
            "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
    }
}