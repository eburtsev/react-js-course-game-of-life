import React, { Component, ReactNode } from "react";

import { Field } from "./Field";

export interface GameConfig {
    width: number;
    height: number;
}

export interface GameState {
    config: GameConfig;
}

async function loadGameConfig(): Promise<GameConfig> {
    return new Promise<GameConfig>((resolve) => {
        setTimeout(() => {
            resolve({ width: 30, height: 10 });
        }, Math.random() * 5000);
    });
}

export class App extends Component<undefined, GameState> {
    state: Readonly<GameState>;

    constructor(props) {
        super(props);
        this.state = {
            config: {
                width: 9,
                height: 3,
            },
        };
    }

    async componentDidMount() {
        this.setState({ ...this.state, config: await loadGameConfig() });
    }

    render(): ReactNode {
        return (
            <>
                <Field width={this.state.config.width} height={this.state.config.height} />
            </>
        );
    }
}
