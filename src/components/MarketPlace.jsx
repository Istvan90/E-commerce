import React from "react";

import { Header } from "./GlobalComponent/Header/HeaderPart";
import { RingMarketPlace } from "./MarketPlace/RingMarketPlace";
import { MyFooter } from "./GlobalComponent/Footer/footer";
  
export function MarketPlace() {
    return (
        <>
            <Header />
            <RingMarketPlace />
            <MyFooter />
        </>
    );
}