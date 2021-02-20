import React, { Component, ReactNode } from "react";
import { Cell } from "./Cell";

interface Props {
    height: number;
    width: number;
}

interface FieldState {
    field: boolean[][];
}

export class Field extends Component<Props, FieldState> {
    state: Readonly<FieldState> = {
        field: Array(this.props.height).fill(Array(this.props.width).fill(false)),
    };

    private handleClick = (x, y) => {
        const field: boolean[][] = [...this.state.field];
        field[x] = [...field[x]];
        field[x][y] = !field[x][y];
        this.setState({ field });
    };

    render(): ReactNode {
        return (
            <div>
                {this.state.field.map((row, x) => (
                    <div key={`row-${x}`} className={"row"}>
                        {row.map((cellClicked, y) => (
                            <Cell key={`cell-${x}-${y}`} x={x} y={y} clicked={cellClicked} onClick={this.handleClick} />
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
