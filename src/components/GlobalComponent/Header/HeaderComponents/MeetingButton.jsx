
/**
 * 
 * @param {string} Content
 * @param {string} Link 
 * @returns 
 */

import React from "react";
import { Link } from "react-router-dom";

export function MeetingButton({ Content, Link }) {
    return (
        <a
            href={Link}
            style={
                { textDecoration: 'none' }
            }
        >
            <button style={
                {
                    width: "180px",
                    height: "30px",
                    color: "white",
                    backgroundColor: "black",
                    border: "none",
                    fontSize: "13px",
                }
            }
            >
                {Content}
            </button>
        </a>
    );
}
