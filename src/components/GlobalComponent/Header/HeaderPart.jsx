// Header.js
import React from "react";

import { SecondRow } from "./HeaderComponents/SecondRow";
import { FirstRow } from "./HeaderComponents/FirstRow";

import "../../../CSS/Header.css";

export function Header() {
    return (
        <header>
            <FirstRow />
            <SecondRow />
        </header>
    );
}