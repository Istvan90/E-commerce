import React from "react";

export function MeetingButton({ Content }) {
    return (
        <button style={
            {
                width: "180px",
                height: "30px",
                color: "white",
                backgroundColor: "black",
                border: "none",
                fontSize : "13px",
            }
        }
        >
            {Content}
        </button>
    );
}