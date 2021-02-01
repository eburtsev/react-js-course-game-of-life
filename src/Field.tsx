import React, { Component, ReactNode } from "react";
import { Cell } from "./Cell";

interface Props {
    height: number;
    width: number;
}

interface State {
    field: boolean[][];
}

export class Field extends Component<Props, State> {
    constructor(props: Props | Readonly<Props>, context?: any) {
        super(props, context);
        this.state = { field: Array.from({ length: this.props.height }, () => Array.from({ length: this.props.width }, () => false)) };
    }

    private handleClick(x, y) {
        const field = this.state.field;
        field[x][y] = !field[x][y];
        this.setState({ field: field });
    }

    render(): ReactNode {
        return (
            <div>
                {this.state.field.map((row, x) => (
                    <div className={"row"}>
                        {row.map((cellClicked, y) => (
                            <Cell x={x} y={y} clicked={cellClicked} onClick={() => this.handleClick(x, y)} />
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
