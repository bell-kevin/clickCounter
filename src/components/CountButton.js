import React from "react";

//create two buttons that will increment and decrement the count. make the decrement button red with a negative sign in it. make the increment button green with a plus sign in it. make the count display in the middle of the buttons.

const CountButton = ({ count, setCount }) => {
    return (
        <button
            onClick={() => {
                setCount(count + 1);
            }}
        >
            Click Me!
        </button>
    );
};

export default CountButton;