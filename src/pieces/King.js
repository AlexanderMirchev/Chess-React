import Piece from "./Piece"

export default class King extends Piece {
    constructor(color) {
        super(color, (color == 1 ?
            "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" :
            "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
    }
}