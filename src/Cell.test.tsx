import React from "react";
import { mount } from "enzyme";
import { Cell } from "./Cell";

describe("Cell tests", () => {
    const x = 4;
    const y = 7;
    test("Default cell", () => {
        expect(
            mount(
                <Cell x={x} y={y} clicked={false} onClick={jest.fn()} />
            ).html()`<div id="Cell_${x}_${y}" style="display: inline-block; height: 3em; width: 3em; border: 1px solid #aaaaaa; color: rgb(85, 85, 85); margin: 1px; vertical-align: top;"><div></div></div>`
        );
    });
    test("Clicked cell", () => {
        expect(
            mount(
                <Cell x={x} y={y} clicked={true} onClick={jest.fn()} />
            ).html()`<div id="Cell_${x}_${y}" style="display: inline-block; height: 3em; width: 3em; border: 1px solid #aaaaaa; color: rgb(85, 85, 85); margin: 1px; vertical-align: top;"><div>${x}/${y}</div></div>`
        );
    });
    test("Simulate click", () => {
        const clickHandler = jest.fn();
        mount(<Cell x={x} y={y} clicked={false} onClick={clickHandler} />).simulate("click");
        expect(clickHandler).toHaveBeenCalledWith(x, y);
    });
});
