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
    intervalId: number;

    state: Readonly<FieldState> = {
        field: Array(this.props.height).fill(Array(this.props.width).fill(false)),
    };

    private handleClick = (x, y) => {
        const field: boolean[][] = [...this.state.field];
        field[x] = [...field[x]];
        field[x][y] = !field[x][y];
        this.setState({ field });
    };

    private onTimerTick = () => {
        this.setState({ field: this.state.field.map((row) => row.map((_) => Math.random() > 0.5)) });
    };

    componentDidMount() {
        this.setState({ field: Array(this.props.height).fill(Array(this.props.width).fill(false)) });
        this.intervalId = window.setInterval(this.onTimerTick, 1000);
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<FieldState>, nextContext: any): boolean {
        return (
            this.props.width != nextProps.width || this.props.height != nextProps.height || JSON.stringify(this.state.field) != JSON.stringify(nextState.field)
        );
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<FieldState>, snapshot?: any) {
        if (this.props.width != prevProps.width || this.props.height != prevProps.height) {
            this.setState({ field: Array(this.props.height).fill(Array(this.props.width).fill(false)) });
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.intervalId);
    }

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
