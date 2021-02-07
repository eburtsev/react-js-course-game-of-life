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
        field: Array.from({ length: this.props.height }, () => Array.from({ length: this.props.width }, () => false)),
    };

    private handleClick = (x, y) => {
        const field: boolean[][] = this.state.field.map((row) => [...row]);
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
