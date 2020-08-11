export default class Piece {
    constructor(color, iconUrl) {
        this.color = color;
        this.style = { backgroundImage: "url('" + iconUrl + "')"};
    }
}
