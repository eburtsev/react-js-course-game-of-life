import React from 'react';
import { Cell } from './Cell';
import { Meta, Story } from '@storybook/react';
import { withKnobs, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Game of Life/Cell',
    component: Cell,
    decorators: [withKnobs]
} as Meta;

export const CellDefault: Story<unknown> = () =>
    <Cell
        x={number("x", 1)}
        y={number("y", 2)}
        onClick={action("Cell clicked")}>
        Cell1
    </Cell>;

export const CellClicked: Story<unknown> = () =>
    <Cell
        x={number("x", 3)}
        y={number("y", 4)}
        clicked={true}
        onClick={action("Cell clicked")}>
        Cell2
    </Cell>;
