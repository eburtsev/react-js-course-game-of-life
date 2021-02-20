import React, { FC } from "react";

interface CellProps {
    x: number;
    y: number;
    clicked?: boolean;
    onClick: (x: number, y: number) => void;
}

const style = {
    display: "inline-block",
    height: "3em",
    width: "3em",
    border: "#AAAAAA solid 1px",
    color: "#555555",
    margin: "1px",
    verticalAlign: "top",
};

export const Cell: FC<CellProps> = ({ x, y, clicked = false, onClick }) => {
    return (
        <div id={`Cell_${x}_${y}`} style={style} onClick={() => onClick(x || 0, y || 0)}>
            {clicked ? `${x}/${y}` : ""}
        </div>
    );
};
