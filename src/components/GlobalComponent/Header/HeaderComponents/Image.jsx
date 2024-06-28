import React from "react";

export function Image({ Source, Alt, Width, Height }) {
    return (
        <img src={Source} alt={Alt} width={Width} Height={Height} />
    );
}