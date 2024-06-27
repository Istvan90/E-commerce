import React from "react";

import { Header } from "./Header/HeaderPart";
import { RingMarketPlace } from "./MarketPlace/RingMarketPlace";
import { MyFooter } from "./Footer/footer";
  
export function MarketPlace() {
    return (
        <>
            <Header />
            <RingMarketPlace />
            <MyFooter />
        </>
    );
}