import React from "react";

interface SquareProps {
    onClick: () => void;
    value: number;
}

const Square: React.FC<SquareProps> = (props) => {

    return (
            <button
                className="square"
                onClick={props.onClick}
                >
                {props.value}
            </button>
            );
}

export default Square;