import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import { Cell } from "./Cell";

describe("Cell tests", () => {
    const x = 4;
    const y = 7;
    test("Default cell", () => {
        const tree = renderer.create(<Cell x={x} y={y} clicked={false} onClick={jest.fn()} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test("Clicked cell", () => {
        const tree = renderer.create(<Cell x={x} y={y} clicked={true} onClick={jest.fn()} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test("Simulate click", () => {
        const clickHandler = jest.fn();
        mount(<Cell x={x} y={y} clicked={false} onClick={clickHandler} />).simulate("click");
        expect(clickHandler).toHaveBeenCalledWith(x, y);
    });
});
