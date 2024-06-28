import React from "react";

import { Header } from './GlobalComponent/Header/HeaderPart';
import { GarrantieBar } from './GlobalComponent/Header/Garanti';
import { Collection } from './Acceuil/Collection/CollectionPart';

import { Necklace } from "./Acceuil/PresNecklace/NeckLace";

import { Meeting } from "./Meeting/Meeting";
import { MyFooter } from "./GlobalComponent/Footer/footer"

export function HomePage() {
    return (
        <>
            <Header />
            <GarrantieBar />
            <Collection />

            <Necklace />

            <Meeting />
            <MyFooter />
        </>
    );
}