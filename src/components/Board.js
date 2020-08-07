import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            piece: null,
            row: props.row,
            col: props.col,
        };
    }

    color() {
        const white = {
            background: "white",
        }
        const black = {
            background: "black",
        }
        if ((this.state.row + this.state.col) % 2 == 0) {
            return black;
        }
        else return white;
    }

    render() {
        const style = {
            border: "1px solid #999",
            height: "34px",
            width: "34px",
        };
        return (
            <button style={{ ...style, ...this.color() }} className="square" ></button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(8).fill(Array(8).fill(null)),
        }
    }
    renderSquare(i, j) {
        return <Square row={i} col={j} />
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

export default Board;