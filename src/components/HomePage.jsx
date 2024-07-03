import React from "react";

import { Header } from './GlobalComponent/Header/HeaderPart';
import { GarrantieBar } from './GlobalComponent/Header/Garanti';
import { Collection } from './Acceuil/Collection/CollectionPart';
import { ParSelection } from "./IconeDeSelection/SelectionComponenet/CardSelection";

import { Necklace } from "./Acceuil/PresNecklace/NeckLace";
import { Nouveautes } from "./IconeDeSelection/SelectionComponenet/Nouveaute";

import { Meeting } from "./Meeting/Meeting";
import { MyFooter } from "./GlobalComponent/Footer/footer"

export function HomePage() {
    return (
        <>
            <Header />
            <GarrantieBar />
            <Collection />
            <ParSelection />

            <Nouveautes />
            <Necklace />

            <Meeting />
            <MyFooter />
        </>
    );
}