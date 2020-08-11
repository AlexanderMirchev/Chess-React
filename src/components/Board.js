import React from 'react';
import Square from './Square'
import initBoard from '../helper-functions/InitBoard'


export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: initBoard(),
        }
    }

    squareColor(i, j) {
        const white = {
            backgroundColor: "lightyellow",
        }
        const black = {
            backgroundColor: "darkgreen",
        }
        if ((i + j) % 2 == 0) {
            return white;
        }
        else return black;
    }

    renderSquare(i, j) {
        const style = {
            border: "1px solid #999",
            height: "45px",
            width: "45px",
        };
        console.log(this.state.squares[i][j])
        return <Square
            piece={this.state.squares[i][j]}
            style={{ ...style, ...this.squareColor(i, j), ...this.state.squares[i][j] ? this.state.squares[i][j].style : null }}
            onClick={this.props.onClick} />
    }

    renderRow(i) {
        let squares = [];
        for (let index = 0; index < this.state.squares[i].length; index++) {
            squares.push(this.renderSquare(i, index));
        }
        return (
            <div className="boardRow">
                {squares} {"\n"}
            </div>
        );
    }

    render() {
        let rows = [];
        for (let index = 0; index < this.state.squares.length; index++) {
            rows.push(this.renderRow(index));
        }
        return (
            <div className="board">
                {rows}
            </div>
        );
    }
}
